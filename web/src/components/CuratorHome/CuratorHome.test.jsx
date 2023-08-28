import { render } from "@redwoodjs/testing/web"

import CuratorHome from "./CuratorHome"

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("CuratorHome", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CuratorHome />)
    }).not.toThrow()
  })
})
