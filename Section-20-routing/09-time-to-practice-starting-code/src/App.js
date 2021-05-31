import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Switch>
            <Route path='/' exact>
                <Redirect to='/quotes' />
            </Route>
            <Route path='/quotes' exact>
                <AllQuotes />
            </Route>
            <Route path='/quotes/:quoteId'>
                <QuoteDetail />
            </Route>
            <Route path='/new-quote'>
                <NewQuote />
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    );
}

export default App;
