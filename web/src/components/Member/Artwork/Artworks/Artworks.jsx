import { Link, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { QUERY } from "src/components/Member/Artwork/ArtworksCell"
import { checkboxInputTag, timeTag, truncate } from "src/lib/formatters"

const DELETE_ARTWORK_MUTATION = gql`
  mutation DeleteArtworkMutation($id: Int!) {
    deleteArtwork(id: $id) {
      id
    }
  }
`

const ArtworksList = ({ artworks }) => {
  const [deleteArtwork] = useMutation(DELETE_ARTWORK_MUTATION, {
    onCompleted: () => {
      toast.success("Artwork deleted")
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete artwork " + id + "?")) {
      deleteArtwork({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Medium</th>
            <th>Description</th>
            <th>Price</th>
            <th>Visible</th>
            <th>Duration</th>
            <th>Units</th>
            <th>Height</th>
            <th>Width</th>
            <th>Depth</th>
            <th>Location</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((artwork) => (
            <tr key={artwork.id}>
              <td>{truncate(artwork.title)}</td>
              <td>{truncate(artwork.medium)}</td>
              <td>{truncate(artwork.description)}</td>
              <td>{truncate(artwork.price)}</td>
              <td>{checkboxInputTag(artwork.public)}</td>
              <td>{truncate(artwork.duration)}</td>
              <td>{truncate(artwork.units)}</td>
              <td>{truncate(artwork.sizeH)}</td>
              <td>{truncate(artwork.sizeW)}</td>
              <td>{truncate(artwork.sizeD)}</td>
              <td>{truncate(artwork.location)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.memberArtwork({ id: artwork.id })}
                    title={"Show artwork " + artwork.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.memberEditArtwork({ id: artwork.id })}
                    title={"Edit artwork " + artwork.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete artwork " + artwork.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(artwork.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArtworksList
