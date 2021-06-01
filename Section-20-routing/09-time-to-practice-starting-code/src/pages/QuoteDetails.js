import {Fragment} from 'react';
import {Route, useParams} from 'react-router-dom';
import {DUMMY_QUOTES} from "./dummy-quotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();
    console.log(params)

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        // security
        return <p>No Quote found!!!!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote  text={quote.text}  author={quote.author}/>
            <Route path={`/quotes/${quote.quoteId}/comments`}>
                <Comments/>
            </Route>


        </Fragment>
    );
};

export default QuoteDetail;
