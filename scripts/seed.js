import { db } from "api/src/lib/db"

import { hashPassword } from "@redwoodjs/auth-dbauth-api"

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany

    if (process.env.LOCAL_DEV) {
      console.log("Creating dev users")
      const users = [
        {
          name: "John",
          email: "john@a.com",
          password: "password1",
        },
        {
          name: "Jane",
          email: "jane@a.com",
          password: "password2",
          organization: "MoMA",
        },
        {
          name: "Paddy",
          organization: "Netvvrk",
          email: "paddy@a.com",
          password: "password3",
        },
      ]

      users.map(async (user) => {
        const [hashedPassword, salt] = hashPassword(user.password)
        const newUser = await db.user.create({
          data: {
            name: user.name,
            email: user.email,
            organization: user.organization,
            hashedPassword,
            salt,
          },
        })
      })
    }
  } catch (error) {
    console.warn("Please define your seed data.")
    console.error(error)
  }
}
