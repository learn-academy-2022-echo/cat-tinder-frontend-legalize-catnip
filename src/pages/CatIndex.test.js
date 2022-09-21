import { screen, render } from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from '../mockCats'
import { BrowserRouter } from 'react-router-dom'


describe("<CatIndex/>", () => {
  test("renders a card for each cat that is passed down to component", () => {
    // Arrange
    render(
      <BrowserRouter>
       <CatIndex cats={mockCats}/>
      </BrowserRouter>
    )
    // Act 
    mockCats.forEach(cat => {
      const meowElement = screen.getByText(cat.name)
      expect(meowElement).toBeInTheDocument()
    })
    // Assert

  })
})