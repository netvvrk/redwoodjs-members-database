import {
  artworks,
  artwork,
  createArtwork,
  updateArtwork,
  deleteArtwork,
} from "./artworks"

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("artworks", () => {
  scenario("returns all artworks", async (scenario) => {
    const result = await artworks()

    expect(result.length).toEqual(Object.keys(scenario.artwork).length)
  })

  scenario("returns a single artwork", async (scenario) => {
    const result = await artwork({ id: scenario.artwork.one.id })

    expect(result).toEqual(scenario.artwork.one)
  })

  scenario("creates a artwork", async (scenario) => {
    mockCurrentUser({ id: scenario.artwork.two.userId })
    const result = await createArtwork({
      input: {
        title: "String",
        medium: "String",
        public: true,
        location: "String",
        userId: scenario.artwork.two.userId,
        updatedAt: "2023-08-28T22:23:05.205Z",
      },
    })

    expect(result.title).toEqual("String")
    expect(result.medium).toEqual("String")
    expect(result.public).toEqual(true)
    expect(result.location).toEqual("String")
    expect(result.userId).toEqual(scenario.artwork.two.userId)
    expect(result.updatedAt).toEqual(new Date("2023-08-28T22:23:05.205Z"))
  })

  scenario("updates a artwork", async (scenario) => {
    const original = await artwork({ id: scenario.artwork.one.id })
    const result = await updateArtwork({
      id: original.id,
      input: { title: "String2" },
    })

    expect(result.title).toEqual("String2")
  })

  scenario("deletes a artwork", async (scenario) => {
    const original = await deleteArtwork({
      id: scenario.artwork.one.id,
    })
    const result = await artwork({ id: original.id })

    expect(result).toEqual(null)
  })
})
