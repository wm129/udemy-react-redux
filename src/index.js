import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/*StoreはactionがdispatchされるとReducerの呼び出しを
処理する。
createStore()によってStoreを作成する
ex) const store = createStore(CombineReducerで作成したRootReducerを入れる)

 */

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
/*createStore()では第二引数に初期状態を渡すことが可能！ */
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    rootElement
);


