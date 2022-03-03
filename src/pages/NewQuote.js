import QuoteForm from "../components/quotes/QuoteForm";
const NewQoute = () => {
  const addQuote = (props) => {
    console.log(props);
  };
  return <QuoteForm onAddQuote={addQuote} />;
};
export default NewQoute;
