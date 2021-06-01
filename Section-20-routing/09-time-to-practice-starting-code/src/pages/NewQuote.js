import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from 'react-router-dom'
import useHttp from "../components/hooks/use-http";
import {addQuote} from "../components/lib/api";
import {useEffect} from "react";

const NewQuote = () => {
    const history = useHistory();

    const {sendRequest, status} = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const onAddQuoteHandler = (quote) => {
        console.log(quote);

        sendRequest(quote)

        /**
         * push vs replace
         * - Using push we can go back with the back button
         * - Using push we can NOT go back with the back button
         * - replace is like a redirect
         * - push add a new page
         */
        //history.push('/quotes')

    }

    return <QuoteForm isLoading={ status === 'pending'} onAddQuote={onAddQuoteHandler}/>
};

export default NewQuote;
