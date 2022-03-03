import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "p1", author: "kim", text: "Learing React is good !" },
  { id: "p2", author: "lee", text: "Learing React is bad !" }
];
const AllQoute = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};
export default AllQoute;
