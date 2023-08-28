import { Link, routes } from "@redwoodjs/router"
const AdminHome = () => {
  return (
    <div>
      <h2 className="text-green-900 font-bold tracking-wide">{"Admin Home"}</h2>
      <Link to={routes.adminUsers()}>Users Admin</Link>
    </div>
  )
}

export default AdminHome
