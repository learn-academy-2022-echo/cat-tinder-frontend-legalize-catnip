import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter, useNavigate } from "react-router-dom";

describe("<CatNew/>", () => {
  test("renders on CatNew page for the user", () => {

    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', { name: /Add a cat/i })
    expect(heading).toBeInTheDocument()
  })
})