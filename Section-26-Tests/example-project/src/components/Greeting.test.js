import {render, screen} from '@testing-library/react';
import Greeting from "./Greeting";

test('renders hello world as a texr+t', () => {
    // AAA rule
    // arrange
    // act
    // assert

    // arrange
    render(<Greeting/>);

    // act: do nothing

    // assert
    const h2 = screen.getByText("Hello world!", {
        exact: true
    });

    expect(h2).toBeInTheDocument();
});
