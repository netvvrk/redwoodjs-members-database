import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { checkboxInputTag, timeTag } from "src/lib/formatters"

const DELETE_ARTWORK_MUTATION = gql`
  mutation DeleteArtworkMutation($id: Int!) {
    deleteArtwork(id: $id) {
      id
    }
  }
`

const Artwork = ({ artwork }) => {
  const [deleteArtwork] = useMutation(DELETE_ARTWORK_MUTATION, {
    onCompleted: () => {
      toast.success("Artwork deleted")
      navigate(routes.memberArtworks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete artwork " + id + "?")) {
      deleteArtwork({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Artwork {artwork.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{artwork.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{artwork.title}</td>
            </tr>
            <tr>
              <th>Medium</th>
              <td>{artwork.medium}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{artwork.description}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{artwork.price}</td>
            </tr>
            <tr>
              <th>Public</th>
              <td>{checkboxInputTag(artwork.public)}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>{artwork.duration}</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{artwork.sizeH}</td>
            </tr>
            <tr>
              <th>Width</th>
              <td>{artwork.sizeW}</td>
            </tr>
            <tr>
              <th>Depth</th>
              <td>{artwork.sizeD}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{artwork.location}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.memberEditArtwork({ id: artwork.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(artwork.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Artwork
