import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AboutMe from "./AboutMe";
import MemoryGame from "./MemoryGame";

const Footer = () => {
    return(
        <div className={"primary"}>

                <Switch>
                    <Route path={"/"} exact component={AboutMe} />
                    <Route path={"/memory"}  component={MemoryGame} />
                </Switch>

        </div>
    )
};
export default Footer;