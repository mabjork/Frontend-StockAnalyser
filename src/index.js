import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {App} from "./components/App"
import store from "./store"

const app = document.getElementById("app")

ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}></IndexRoute>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/register" component={RegisterPage}></Route>
        </Route>
    </Router>
    </Provider>,app);
