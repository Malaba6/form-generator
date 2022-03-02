import React from "react";
import { render } from "@testing-library/react";

import App from "../App"

describe("<App />", () => {
  const {container, getByTestId} = render(<App />)
  test("should render the App compoenent on the screen", async () => {
    expect(getByTestId("form-wrapper")).toBeInTheDocument()
  })
})