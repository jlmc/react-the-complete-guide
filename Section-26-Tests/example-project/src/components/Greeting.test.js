import {render, screen} from '@testing-library/react';
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
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

    test("renders good to see you if the button was NOT clicked", () => {
        render(<Greeting/>);
        const element = screen.getByText('good to see you!', {
            exact: true
        });

        expect(element).toBeInTheDocument();
    });

    test("renders Changed if the button was clicked", () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const text = screen.getByText('Changed!');
        expect(text).toBeInTheDocument();
    });

    test("does not renders good to see you if the button was clicked", () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const text = screen.getByText('Changed!');
        expect(text).toBeInTheDocument();

        const element = screen.queryByText('good to see you!', {
            exact: false
        });
        //expect(element).not.toBeInTheDocument();
        expect(element).toBeNull();
    })


});
