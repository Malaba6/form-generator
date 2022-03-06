import React from "react";
import { render } from "@testing-library/react";

import Input from "../Input"

const props = {
  text: "First Name",
  type: "label",
  id: "label-1",
  forms: [{
    header: "Name",
    id: "header-name",
    form: []
  }],
  header: 'header',
  open: false,
  setIsUnsaved: jest.fn(),
  isUnsaved: false,
  setForm:  jest.fn(),
  setOpen: jest.fn(),
}

describe("<Input />", () => {
  const { container, getByText } = render(<Input {...props} />)
  test("should render the Input compoenent with provided Label", async () => {
    expect(getByText(`${props.text}:`)).toBeInTheDocument()
  })
})
