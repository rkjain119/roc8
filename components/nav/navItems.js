import { UserState } from '../../context/users'
function NavItems() {
  let navigation
  UserState()
    ? (navigation = [
        { name: 'Dashboard', href: '/' },
        { name: 'Profile', href: '/profile' },
        { name: 'Applications', href: '/profile/applications' },
        { name: 'FAQ', href: '/faq' },
      ])
    : (navigation = [
        { name: 'Get Hired', href: '/login' },
        { name: 'Mentor', href: '/mentor' },
        { name: 'Hire', href: '/hire' },
        { name: 'Job board', href: '/jobs' },
      ])
  return navigation
}

export default NavItems
