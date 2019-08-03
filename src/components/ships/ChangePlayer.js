import React from 'react'

export default function ChangePlayer(props) {
    return (
        <div className="alert alert-success" role="alert">
            {props.setShip ? <div></div> :
                <h4 className="alert-heading"><p>{props.score}</p></h4>
                }
            <h4 className="alert-heading">{props.player}?</h4>
            <hr/>
                <button type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={props.onClick}
                >
                    It's me
                </button>
        </div>
)
}