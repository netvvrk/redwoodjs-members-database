import { db } from "src/lib/db"

export const artworks = () => {
  return db.artwork.findMany()
}

export const artwork = ({ id }) => {
  return db.artwork.findUnique({
    where: { id },
  })
}

export const createArtwork = ({ input }) => {
  const userId = context.currentUser.id
  return db.artwork.create({
    data: { ...input, userId },
  })
}

export const updateArtwork = ({ id, input }) => {
  return db.artwork.update({
    data: input,
    where: { id },
  })
}

export const deleteArtwork = ({ id }) => {
  return db.artwork.delete({
    where: { id },
  })
}

export const Artwork = {
  User: (_obj, { root }) => {
    return db.artwork.findUnique({ where: { id: root?.id } }).User()
  },
}
