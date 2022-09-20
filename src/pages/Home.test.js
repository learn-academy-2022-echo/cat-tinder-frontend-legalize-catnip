import {screen, render} from '@testing-library/react';
import Home from './Home';

describe ("<Home/>", () => {
    test("render the home page Jason", () => {
        render(<Home/>)
        
        const element = screen.getByText(/It is a home for Cat Tinder/i)
        

       expect(element).toBeInTheDocument()
    })
})