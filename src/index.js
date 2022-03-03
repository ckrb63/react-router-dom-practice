import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllQoute from "./pages/AllQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NewQoute from "./pages/NewQuote";
import MainNavigation from "./components/layout/MainNavigation";

ReactDOM.render(<App />, document.getElementById("root"));
