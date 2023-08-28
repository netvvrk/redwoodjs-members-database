import { users, user, createUser, updateUser, deleteUser } from "./users"

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("users", () => {
  scenario("returns all users", async (scenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario("returns a single user", async (scenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario("creates a user", async () => {
    const result = await createUser({
      input: {
        name: "String",
        email: "String1464771",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2023-08-28T14:56:06.163Z",
      },
    })

    expect(result.name).toEqual("String")
    expect(result.email).toEqual("String1464771")
    expect(result.hashedPassword).toEqual("String")
    expect(result.salt).toEqual("String")
    expect(result.updatedAt).toEqual(new Date("2023-08-28T14:56:06.163Z"))
  })

  scenario("updates a user", async (scenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { name: "String2" },
    })

    expect(result.name).toEqual("String2")
  })

  scenario("deletes a user", async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
