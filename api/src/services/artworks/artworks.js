import { validate } from "@redwoodjs/api"

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
  const { duration, sizeH, sizeW } = input

  validate(duration, "Dimensions", {
    custom: {
      with: () => {
        if (!duration && !(sizeH && sizeW)) {
          throw new Error("You must supply either duration or height/width")
        }
      },
    },
  })

  const userId = context.currentUser.id
  return db.artwork.create({
    data: { ...input, userId },
  })
}

export const updateArtwork = ({ id, input }) => {
  const currentArtwork = artwork(id)

  const duration = currentArtwork.duration || input.duration
  const sizeH = currentArtwork.sizeH || input.sizeH
  const sizeW = currentArtwork.sizeW || input.sizeW

  validate(duration, "Dimensions", {
    custom: {
      with: () => {
        if (!duration && !(sizeH && sizeW)) {
          throw new Error("You must supply either duration or height/width")
        }
      },
    },
  })

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
