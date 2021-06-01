import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from 'react-router-dom'

const NewQuote = () => {
    const history = useHistory();

    const onAddQuoteHandler = (quote) => {
        console.log(quote);

        /**
         * push vs replace
         * - Using push we can go back with the back button
         * - Using push we can NOT go back with the back button
         * - replace is like a redirect
         * - push add a new page
         */
        history.push('/quotes')

    }

    return <QuoteForm onAddQuote={onAddQuoteHandler}/>
};

export default NewQuote;
