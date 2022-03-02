import React from "react";
import { render } from "@testing-library/react";

import Notify from "../Notify"

const props = {
  open: true,
  setOpen: jest.fn(),
}

describe("<Notify />", () => {
  const {container, getByText} = render(<Notify {...props} />)
  test("should render the Notify compoenent", async () => {
    expect(getByText('Profile Updated successfully!')).toBeInTheDocument()
  })
})