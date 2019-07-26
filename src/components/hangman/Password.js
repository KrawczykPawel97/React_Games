import React from 'react'

export default function Password(props) {
    return (
        <div  className={"password"} style={{marginBottom: '30px'}}>
            <p>Category : {props.category}</p>
            <span>{props.value}</span><br/>
        </div>
    )
}