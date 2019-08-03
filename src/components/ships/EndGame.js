import React from 'react'
import {NavLink} from "react-router-dom";

export default function EndGame(props) {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>{props.body1}</p>
            <p>{props.body2}</p>

            <hr/>
                        <button type="button" className="btn btn-outline-primary btn-lg btn-block">
                            <NavLink to={"/"}
                                     exact={true}
                            >
                                {"Exit"}
                            </NavLink>
                        </button>
        </div>
    )
}