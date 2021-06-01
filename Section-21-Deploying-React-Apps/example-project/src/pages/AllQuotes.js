import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import {getAllQuotes} from "../components/lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
    console.log('---> 1... Starting reading')
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        console.log('---> 2... Send HTTP Request')
        sendRequest();
    }, [sendRequest])


    if (status === 'pending') {
        console.log('---> 3... pending')
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if (error) {
        console.log('---> 4... error')
        return <div className='centered focused'>
            <p>{error}</p>
        </div>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        console.log('---> 5... No Quotes')
        return <NoQuotesFound/>
    }

    return <QuoteList quotes={loadedQuotes}/>;
};

export default AllQuotes;
