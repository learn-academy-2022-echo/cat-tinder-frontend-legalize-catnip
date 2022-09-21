import { screen, render } from '@testing-library/react';
import NotFound from './NotFound';

describe("<NotFound/>", () => {
    test("Not Found renders with no errors", () => {
        render(<NotFound />)

        const element = screen.getByText(/404 thats an error./i)


        expect(element).toBeInTheDocument()
    })
})