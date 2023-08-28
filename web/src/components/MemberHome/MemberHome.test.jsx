import { render } from "@redwoodjs/testing/web"

import MemberHome from "./MemberHome"

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("MemberHome", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MemberHome />)
    }).not.toThrow()
  })
})
