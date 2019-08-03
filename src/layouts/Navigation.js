import React from 'react';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';


const list = [
    {name: "Main", path: "/", exact: true},
    {name: "Memory", path: "/memory"},
    {name: "Hangman", path: "/hangman"},
    {name: "Tic Tac Toe", path: "/ticTacToe"},
    {name: "Ships", path:"/ships"}
];

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name} className="list-group-item">
            <NavLink to={item.path}
                     exact={item.exact ? item.exact : false}
            >
                {item.name}
            </NavLink>
        </li>
    ));

    return(
        <nav className={"main"}>
            <p className={"head"}>Navigation</p>
            <ul className="list-group">
                {menu}
            </ul>
        </nav>
    )
};

export default Navigation;
