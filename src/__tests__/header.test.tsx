import { render, screen, within } from "@testing-library/react"
import Header from "../components/Header"
import "@testing-library/jest-dom"
import { ThemeProvider } from "styled-components"
import lightTheme from "../styles/themes/light"

const renderHeaderLightTheme = () => {
  render(
    <ThemeProvider theme={lightTheme}>
      <Header handleChangeFontFamily={jest.fn()} handleChangeTheme={jest.fn()} theme="light"/>
    </ThemeProvider>
  )
}

describe("Header", () => {
  test("renders the logo", () => {
    renderHeaderLightTheme()
    const logo = screen.getByAltText("Logo")
    expect(logo).toBeInTheDocument()
  })

  test("show the font value and check if value is 'Sans Serif'", () => {
    const initialFont = "Sans Serif"
    renderHeaderLightTheme()
    const fontSelectedText = screen.getByTestId("selected-font-text")
    expect(fontSelectedText).toHaveTextContent(initialFont)
  })

  test("the menu have 3 elements and also the follow options: Sans Serif, Serif and Mono", () => {
    renderHeaderLightTheme()
    const fontListUl = screen.getByTestId("font-list-menu")
    const fontListUlItems = within(fontListUl).getAllByRole("listitem")

    // Check if there are 3 elements inside ul (fontListUl)
    expect(fontListUlItems.length).toBe(3)

    // Check the value of each li element
    expect(fontListUlItems[0]).toHaveTextContent("Sans Serif")
    expect(fontListUlItems[1]).toHaveTextContent("Serif")
    expect(fontListUlItems[2]).toHaveTextContent("Mono")
  })

  test("show the switch handler theme unchecked and also the svg theme", () => {
    renderHeaderLightTheme()
    const switchHandler = screen.getByTestId("switch-handler-theme")
    // Check if swith element is in the document and also the checked if false
    // checked must be false because it is rendering with light theme
    expect(switchHandler).toBeInTheDocument()
    expect(switchHandler).not.toBeChecked()

    const svgSwitch = screen.getByTestId("svg-theme")
    expect(svgSwitch).toBeInTheDocument()
  })
})