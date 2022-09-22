import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter, useNavigate } from "react-router-dom";

describe("<CatNew/>", ()=>{
    test("renders on CatNew page for the user", ()=>{
    
        render
        (<BrowserRouter><CatNew/></BrowserRouter>)
       
        const heading = screen.getByRole('heading', {name: /Add a new profile/i})
        
        expect(heading).toBeInTheDocument()

      })

      test(" has multiple input fields on the form", () => {
        render(<CatNew/>)
        const textbox = screen.getAllByRole("textbox")
        screen.debug(textbox)
        expect(textbox[0]).toBeEnabled()
        expect(textbox.length).toEqual(3)
        expect(textbox.length).toBeGreaterThan(0)
      })

})