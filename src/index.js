import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router,Switch} from 'react-router-dom';
import history from "./base/history";
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './reducer'
import thunk from 'redux-thunk';
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";


const compostEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,{
        auth:{authenticated: localStorage.getItem("auth_token")}
    },
    compostEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App>

            <Route path="/" exact component={Welcome}/>
            <Route path="/signup" component={Signup} />
            <Route path="/feature" component={Feature}/>
            <Route path="/signout" component={Signout}/>
            <Route path="/signin" component={Signin}/>
        </App>
    </BrowserRouter>
    </Provider>


    ,document.getElementById("root")
)


