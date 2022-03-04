import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
const NewQoute = () => {
  const navigate = useNavigate();
  const addQuote = (props) => {
    console.log(props);
    navigate("/quotes");
  };
  return <QuoteForm onAddQuote={addQuote} />;
};
export default NewQoute;
