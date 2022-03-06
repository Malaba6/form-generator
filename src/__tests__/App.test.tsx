import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import App from "../App"
import { store } from '../store';

describe("<App />", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  test("should render the App compoenent on the screen", async () => {
    expect(getByTestId("app")).toBeInTheDocument()
  })
})
