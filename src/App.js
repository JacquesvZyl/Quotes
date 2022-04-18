import { Redirect, Switch, Route } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation.component";
import Comments from "./components/comments/Comments";
import AllQuotes from "./pages/AllQuotes.page";
import QuoteDetail from "./pages/QuoteDetail.page";
import NewQuote from "./pages/NewQuote.page";
import Layout from "./components/layout/Layout.component";
import NotFound from "./pages/NotFound.page";

/* 
  key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}

*/

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
