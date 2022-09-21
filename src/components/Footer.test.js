import { screen, render } from '@testing-library/react';
import Footer from './Footer';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe("<Footer/>", () => {
    test("footer renders without error", () => {
        render(<Footer />)
        const indexLink = screen.getByText(/2022 All Rights Reserved © Proudly made by Dawit, Jason and last but not least Tuan./i)
        expect(indexLink).toBeInTheDocument()


    })
})
