import { Fragment } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
const DUMMY_DATA = [
  { id: "p1", author: "kim", text: "Learing React is good !" },
  { id: "p2", author: "lee", text: "Learing React is bad !" }
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <q>No quote</q>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Link to={`/quotes/${quote.id}/comments`}>comments</Link>
    </Fragment>
  );
};
export default QuoteDetail;
