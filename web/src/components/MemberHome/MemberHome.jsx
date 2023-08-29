import { Link, routes } from "@redwoodjs/router"
const MemberHome = () => {
  return (
    <div>
      <h2 className="text-green-900 font-bold tracking-wide">
        {"Members Home"}
      </h2>
      <Link to={routes.memberArtworks()}>Edit artworks</Link>
    </div>
  )
}

export default MemberHome
