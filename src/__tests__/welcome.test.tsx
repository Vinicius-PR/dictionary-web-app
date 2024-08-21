import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import Welcome from "../components/Welcome"
import lightTheme from "../styles/themes/light"

import "@testing-library/jest-dom"

describe("Welcome Component", () => {
  test("have the right title and text", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Welcome/>
      </ThemeProvider>
    )
    const welcomeTitle = screen.getByRole("heading", {name: /Welcome to Free Super Dictionary 🤓/i })
    const welcomeText = screen.getByText("Try to search for any word and check the result. 😁")
    expect(welcomeTitle).toBeInTheDocument()
    expect(welcomeText).toBeInTheDocument()
  })
})