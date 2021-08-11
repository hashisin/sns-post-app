import React from "react";
import {　NavLink, Link, withRouter } from "react-router-dom";

export default class Layout extends React.Component {
    navigate() {
        console.log(this.props.history);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>"日常生活を少し楽に"</h1>
                {this.props.children}
                <Link to="/" className="btn btn-warning">トップページ</Link>
                <Link to="/list" className="btn btn-warning">リスト</Link>
                <Link to="/settings" className="btn btn-warning">設定</Link>
            </div>
        );
    }
}

