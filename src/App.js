import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import AllQoute from "./pages/AllQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NewQoute from "./pages/NewQuote";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQoute />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route path="/comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQoute />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
