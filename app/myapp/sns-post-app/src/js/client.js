import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./pages/Layout";
import Top from "./pages/Top";
import List from "./pages/List";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Top}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/settings" component={Settings}></Route>
        </Layout>
    </Router>, 
app);
