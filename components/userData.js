import useSWR from 'swr'
import { supabase } from '../utils/initSupabase'
import toast from 'react-hot-toast'
// const notify = () => toast('Here is your toast.')

export const getUserProfile = async () => {
  const userId = supabase.auth.user().id
  try {
    let { data: userProfile, error } = await supabase
      .from('user_profile')
      .select('*')
      .eq('id', userId)
      .single()
    // console.log(userProfile, 'profile')
    if (error) {
      toast.error("Error fetching user's profile")
      return console.log(error)
    }

    return userProfile
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  }
}

export const setUserProfile = async (data) => {
  const userId = supabase.auth.user().id
  const Data = { ...data, id: userId }
  if (userId) {
    try {
      const { data: userProfile, error } = await supabase
        .from('user_profile')
        .update(Data)
        .eq('id', userId)
        .single()
      console.log(userProfile, 'profile')
      if (error) {
        toast.error("Error setting user's profile")
        return console.log(error)
      }
      toast.success('Profile updated')
      return userProfile
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        throw error
      }
    } finally {
      console.log('User profile ', 'POST 200')
    }
  }
}

export const getBlog = async () => {
  const userId = supabase.auth.user().id
  try {
    let { data: blogs, error } = await supabase
      .from('blogs')
      .select('blog1,blog2,blog3')
      .eq('id', userId)
      .single()
    if (error) {
      toast.error("Error fetching user's blogs")
      return console.log(error)
    }

    return blogs
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  } finally {
    console.log('blogs', 'GET 200')
  }
}

export const setBlog = async (data) => {
  const userId = supabase.auth.user().id
  const Data = { ...data, id: userId }
  try {
    let { data: blogs, error } = await supabase
      .from('blogs')
      .upsert(Data)
      .eq('id', userId)
      .single()
    if (error) {
      toast.error("Error setting user's blogs")
      return console.log(error)
    }
    toast.success('Blogs updated')
    return blogs
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  } finally {
    console.log('Blogs', 'POST 200')
  }
}

export const getProjects = async () => {
  const userId = supabase.auth.user().id
  try {
    let { data: projects, error } = await supabase
      .from('projects')
      .select('project_json_array', { count: 'exact' })
      // .select("projects:project_json_array->'$.project_1' as project_1")
      .eq('id', userId)
    console.log(projects, 'TEST fetched is user data')
    if (error) {
      toast.error("Error fetching user's projects")
      return console.log(error)
    }
    return projects
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  }
}

export const setProjects = async (data) => {
  const userId = supabase.auth.user().id
  try {
    let { data: projects, error } = await supabase
      .from('projects')
      .upsert({ project_json_array: data, id: userId })
      .eq('id', userId)
      .single()
    console.log(projects, 'TEST fetched')
    if (error) {
      toast.error("Error setting user's projects")
      return console.log(error)
    }
    toast.success('Projects updated')
    return projects
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  }
}
export const deleteProject = async (projectId) => {
  const fetchProjectsData = await getProjects()
  const projects = fetchProjectsData[0].project_json_array
  const newProjects = projects.filter((project) => project.id !== projectId)

  await setProjects(newProjects)
}

export const getLinkedinUrl = async () => {
  const userId = supabase.auth.user().id
  try {
    let { data, error } = await supabase
      .from('user_profile')
      .select('linkedin_url')
      .eq('id', userId)
      .single()
    if (error) {
      return console.log(error)
    }
    console.log(data.linkedin_url, 'LINKEDIN URL')
    return data.linkedin_url
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  }
}

export const setEnquiry = async (data) => {
  try {
    let { data: enquiry, error } = await supabase.from('enquiry').insert(data)
    if (error) {
      toast.error('Error sending enquiry')
      return error
    }
    toast.success('Enquiry sent')
    return enquiry
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      throw error
    }
  } finally {
    console.log(enquiry, 'POST 200')
  }
}
