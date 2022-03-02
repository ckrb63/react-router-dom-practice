import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllQoute from "./pages/AllQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NewQoute from "./pages/NewQuote";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/quotes" />} />
      <Route path="/quotes" element={<AllQoute />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQoute />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
