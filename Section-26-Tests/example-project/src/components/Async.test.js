import {render, screen} from '@testing-library/react';
import Async from "./Async";

describe('Async component', () => {

    test('renders post id request succeeds', async () => {
        render(<Async/>);

        // getByRole will fails if more than one elements is find
        //const listItemElements = screen.getByRole('listitem');
        //const listItemElements = screen.getAllByRole('listitem');
        const listItemElements = await screen.findAllByRole('listitem', {}, {}); // find methods returns a promise,
        expect(listItemElements).not.toHaveLength(0);

    });
});
