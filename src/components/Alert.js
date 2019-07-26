import React from 'react'
import {NavLink} from "react-router-dom";

export default function Alert(props) {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>{props.body}</p>
            <div className="alert alert-warning" role="alert">
                <div className="row justify-content-around">
                    <div className="col-4">
                        <button type="button"
                                className="btn btn-outline-success"
                                onClick={props.onClick}
                        >
                            Play Again
                        </button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-outline-primary">
                            <NavLink to={"/"}
                                     exact={true}
                            >
                                {"Exit"}
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}