import {Fragment, useEffect} from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../components/hooks/use-http";
import {getSingleQuote} from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const {quoteId} = params
    console.log(params)
    console.log(quoteId)



    const {sendRequest, status, data: quote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        console.log('---> 1... Send HTTP Request - ' + quoteId)
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    //const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);


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

    if (!quote.text) {
        // security
        return <p>No Quote found!!!!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>

            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Commments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments/>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}`}>close comments</Link>
                </div>
            </Route>

        </Fragment>
    );
};

export default QuoteDetail;
