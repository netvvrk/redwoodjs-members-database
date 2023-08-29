import Artwork from "src/components/Member/Artwork/Artwork"

export const QUERY = gql`
  query FindArtworkById($id: Int!) {
    artwork: artwork(id: $id) {
      id
      title
      medium
      description
      price
      public
      duration
      sizeH
      sizeW
      sizeD
      location
      active
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Artwork not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ artwork }) => {
  return <Artwork artwork={artwork} />
}
