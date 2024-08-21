import { fireEvent, getByRole, render, screen, within } from "@testing-library/react"
import Search from "../components/Search"
import "@testing-library/jest-dom"

import { ThemeProvider } from "styled-components"
import lightTheme from "../styles/themes/light"

const renderSearch = () => {
  render(
    <ThemeProvider theme={lightTheme}>
      <Search handleNoDefinitionFound={jest.fn()} handleSetResult={jest.fn()}/>
    </ThemeProvider>
  )
}

describe("Search", () => {
  test("render the input type text and with placeholder as 'Search for any word…'", () => {
    renderSearch()
    const searchElement = screen.getByTestId("search-input")

    expect(searchElement).toBeInTheDocument()
    expect(searchElement).toHaveAttribute("type", "text")
    expect(searchElement).toHaveAttribute("placeholder", "Search for any word…")
  })

  test("render the submit input with the svg image", () => {
    renderSearch()

    const searchBtn = screen.getByRole("button")
    expect(searchBtn).toBeInTheDocument()
    expect(searchBtn).toHaveAttribute("type", "submit")

    const searchSvgBtn = within(searchBtn).getByRole("img")
    expect(searchSvgBtn).toBeInTheDocument()
  })

  test("display error message when try to search with an empty input", () => {
    renderSearch()

    const searchBtn = screen.getByRole("button")
    const searchInput = screen.getByTestId("search-input")

    expect(searchInput).toHaveValue("")
    fireEvent.click(searchBtn)

    const errorSpan = screen.getByRole("alert")
    expect(errorSpan).toHaveTextContent("Whoops, can’t be empty…")
  })

  test("display no error message when input is provided", () => {
    renderSearch()

    const searchBtn = screen.getByRole("button")
    const searchInput = screen.getByTestId("search-input")

    fireEvent.change(searchInput, {target: {value: "hello"}})
    expect(searchInput).toHaveValue("hello")
    fireEvent.click(searchBtn)

    // Here in this case I had to use 'queryByRole' instead of 'getByRole'.
    // 'queryByRole' returns null if the element isn't found, rather than throwing an error. This allows us to check whether the error message is absent.
    const errorSpan = screen.queryByRole("alert")
    expect(errorSpan).not.toBeInTheDocument()

  })
})