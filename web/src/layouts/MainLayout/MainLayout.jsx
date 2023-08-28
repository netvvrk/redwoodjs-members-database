import { Toaster } from "@redwoodjs/web/toast"

import TopNav from "src/components/TopNav/TopNav"

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <TopNav />
      </div>
      <Toaster />
      <div className="container mx-auto px-7">{children}</div>
    </>
  )
}

export default MainLayout
