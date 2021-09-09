import { Route, Switch, Redirect } from "react-router-dom";
import Quotes from "./components/pages/Quotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path="/quotes" exact>
          <Quotes/>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail/>
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
