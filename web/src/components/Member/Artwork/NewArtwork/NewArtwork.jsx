import { navigate, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import ArtworkForm from "src/components/Member/Artwork/ArtworkForm"

const CREATE_ARTWORK_MUTATION = gql`
  mutation CreateArtworkMutation($input: CreateArtworkInput!) {
    createArtwork(input: $input) {
      id
    }
  }
`

const NewArtwork = () => {
  const [createArtwork, { loading, error }] = useMutation(
    CREATE_ARTWORK_MUTATION,
    {
      onCompleted: () => {
        toast.success("Artwork created")
        navigate(routes.memberArtworks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createArtwork({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Artwork</h2>
      </header>
      <div className="rw-segment-main">
        <ArtworkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewArtwork
