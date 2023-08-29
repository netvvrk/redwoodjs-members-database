import { Link, routes } from "@redwoodjs/router"

import Artworks from "src/components/Member/Artwork/Artworks"

export const QUERY = gql`
  query FindArtworks {
    artworks {
      id
      title
      medium
      description
      price
      public
      duration
      units
      sizeH
      sizeW
      sizeD
      location
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No artworks yet. "}
      <Link to={routes.memberNewArtwork()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ artworks }) => {
  return <Artworks artworks={artworks} />
}
