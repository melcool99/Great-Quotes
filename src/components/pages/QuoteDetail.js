import React, { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QUOTES = [
  { id: "q1", author: "Mlc", text: "React is fun" },
  { id: "q2", author: "Cristian", text: "Learning is hard" },
];

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();
  const {quoteId} = params

  const {sendRequest, status, error, data: loadedQuote} = useHttp(getSingleQuote, true)


  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  if (status==='pending') {
    return <div className='centered'>
        <LoadingSpinner/>
    </div>
  }

  if (error) {
   return <p className="centered">{error}</p>
  }
  
  if (!loadedQuote.text) {
    return <p>No quote</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
