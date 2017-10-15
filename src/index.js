import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import App from "./components/App"
import {store} from "./store"
import {history} from "./helpers/history"
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>

), document.getElementById('app'));
