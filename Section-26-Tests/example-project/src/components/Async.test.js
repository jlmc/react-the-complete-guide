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

    test('renders post id request succeeds with MOCK', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });

        render(<Async/>);

        // getByRole will fails if more than one elements is find
        //const listItemElements = screen.getByRole('listitem');
        //const listItemElements = screen.getAllByRole('listitem');
        const listItemElements = await screen.findAllByRole('listitem', {}, {}); // find methods returns a promise,
        expect(listItemElements).not.toHaveLength(0);
    });
});
