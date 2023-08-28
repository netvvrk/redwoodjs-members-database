import { Link, routes } from "@redwoodjs/router"
import { toast } from "@redwoodjs/web/toast"

import { useAuth } from "src/auth"

const TopNav = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()

  const doLogout = () => {
    toast.success("You have been signed out")
    logOut()
  }
  return (
    <div className="navbar mb-5 bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link className="btn btn-ghost" to={routes.home()}>
          <img
            src="/logo.png"
            alt="Netvvrk Members Database"
            width="30"
            height="30"
          />
        </Link>
        {currentUser?.email}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal mx-1">
          <li>
            {isAuthenticated ? (
              <button onClick={doLogout} className="btn btn-sm">
                Sign out
              </button>
            ) : (
              <Link className="btn btn-sm" to={routes.login()}>
                Sign in
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav
