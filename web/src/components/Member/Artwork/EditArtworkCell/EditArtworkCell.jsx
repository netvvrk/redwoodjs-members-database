import { navigate, routes } from "@redwoodjs/router"

import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import ArtworkForm from "src/components/Member/Artwork/ArtworkForm"

export const QUERY = gql`
  query EditArtworkById($id: Int!) {
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
const UPDATE_ARTWORK_MUTATION = gql`
  mutation UpdateArtworkMutation($id: Int!, $input: UpdateArtworkInput!) {
    updateArtwork(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ artwork }) => {
  const [updateArtwork, { loading, error }] = useMutation(
    UPDATE_ARTWORK_MUTATION,
    {
      onCompleted: () => {
        toast.success("Artwork updated")
        navigate(routes.memberArtworks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateArtwork({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Artwork {artwork?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArtworkForm
          artwork={artwork}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
