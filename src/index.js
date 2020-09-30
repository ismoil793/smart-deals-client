import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"; // compose for testing purposes
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";  // to be able to use redux asynchronously

import Routes from "./routes";
import reducers from "./store/reducers";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk))(createStore);
//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
         <Routes />
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);