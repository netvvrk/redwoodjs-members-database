import { MetaTags } from "@redwoodjs/web"

import { useAuth } from "src/auth"
import AdminHome from "src/components/AdminHome/AdminHome"
import CuratorHome from "src/components/CuratorHome/CuratorHome"
import MemberHome from "src/components/MemberHome/MemberHome"

const HomePage = () => {
  const { hasRole } = useAuth()
  return (
    <>
      <MetaTags title="Home" />

      <h1>HomePage</h1>

      {hasRole("admin") && <AdminHome />}
      {hasRole("curator") && <CuratorHome />}
      {hasRole("member") && <MemberHome />}
    </>
  )
}

export default HomePage
