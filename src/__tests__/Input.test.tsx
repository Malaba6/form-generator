import React from "react";
import { render } from "@testing-library/react";

import Input from "../Input"

const props = {
  text: "First Name",
  type: "label",
  id: "label-1",
  setOpen: jest.fn(),
}

describe("<Input />", () => {
  const {container, getByText} = render(<Input {...props} />)
  test("should render the Input compoenent with provided Label", async () => {
    expect(getByText(`${props.text}:`)).toBeInTheDocument()
  })
})