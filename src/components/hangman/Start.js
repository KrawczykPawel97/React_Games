import React from 'react'

export default function Start(props) {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Enter the missing data!</h4>
            <div className="alert alert-warning" role="alert">
                {/*<form>*/}
                    <div className="form-row">
                        <div className="col">
                            <input type="text" id={"category"} className="form-control" placeholder="Category" style={{height: '50px'}}/>
                        </div>
                        <div className="col">
                            <input type="text" id={"password"} className="form-control" placeholder="Password" style={{height: '50px'}}/>
                        </div>
                    </div>
                    <br/>
                {/*</form>*/}
                <div className={"row "}>
                    <button type="button"
                            className="btn btn-primary btn-lg btn-block"
                            style={{height: '45px'}}
                            onClick={props.onClick}
                    >
                        Start Game
                    </button>
                </div>
                {/*<div className={"row"}>*/}
                {/*    <button type="submit" className="btn btn-primary">Start Game</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}