import React from "react";
import { render } from "@testing-library/react";

import Header from "../Header"

describe("<Header />", () => {
  const {container, getByText} = render(<Header header={"Header1"} />)
  test("should render the Header compoenent with Header1 text", async () => {
    expect(getByText("Header1")).toBeInTheDocument()
  })
})