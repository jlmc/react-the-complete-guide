import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {

    const onAddQuoteHandler = (quote) => {
        console.log("----");
    }

    return <QuoteForm onAddQuote={onAddQuoteHandler}/>
};

export default NewQuote;
