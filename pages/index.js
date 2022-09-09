import Landing from '../components/landing'
import Dashboard from '../components/dashboard'

import { UserState } from '../context/users'

function Slash() {
  return UserState() ? <Dashboard /> : <Landing />
}
export default Slash
