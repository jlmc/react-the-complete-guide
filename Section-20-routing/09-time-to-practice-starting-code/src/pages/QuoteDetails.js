import {Fragment} from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import {DUMMY_QUOTES} from "./dummy-quotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    console.log(params)


    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
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
