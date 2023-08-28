import { Link, routes } from "@redwoodjs/router"
const AdminHome = () => {
  return (
    <div>
      <h2>{"AdminHome"}</h2>
      <Link to={routes.adminUsers()}>Users Admin</Link>
    </div>
  )
}

export default AdminHome
