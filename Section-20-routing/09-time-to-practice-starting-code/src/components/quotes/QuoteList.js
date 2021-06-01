import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory, useLocation} from "react-router-dom";

// sort function
const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};


// component
const QuoteList = (props) => {
    const history = useHistory();
    const locationStateLocation = useLocation();

    console.log(locationStateLocation);

    const urlSearchParams = new URLSearchParams(locationStateLocation.search);
    const isAscSorting = urlSearchParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes, isAscSorting);

    function changeSortingHandler(event) {
        history.push('/quotes?sort=' + (isAscSorting ? 'desc' : 'asc') )
    }

    return (
    <Fragment>
      <div className={classes.sorting}>
          <button onClick={changeSortingHandler}>Sort {isAscSorting ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
