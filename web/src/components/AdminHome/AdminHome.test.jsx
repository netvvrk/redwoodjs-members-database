import { render } from "@redwoodjs/testing/web"

import AdminHome from "./AdminHome"

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("AdminHome", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AdminHome />)
    }).not.toThrow()
  })
})
