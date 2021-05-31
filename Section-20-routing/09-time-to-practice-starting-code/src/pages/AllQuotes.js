import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 1, author: 'John', text: 'Always learning!'},
    {id: 2, author: 'Ali', text: 'Greater off all times !'},
    {id: 3, author: 'Duke', text: 'Java Rocks!'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;
