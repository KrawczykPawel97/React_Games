import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Button.css';

// const Button = (props) => {
//     const {id, active, letter} = props.button;
//
//     if (active) {
//         return (
//             <button id={id}
//                     type="button"
//                     className="btn btn-outline-primary " disabled
//             >
//                 {letter}
//             </button>
//         );
//     } else {
//         return (
//                 <button id={id}
//                         type="button"
//                         className="btn btn-outline-primary "
//                         onClick={() => props.handleClick(id)}
//                 >
//                     {letter}
//                 </button>
//         );
//     }
// };
//
// export default Button;

export default function Button (props) {
    // if(props.active) {
    //     return (
    //         <button id={props.id}
    //                 type="button"
    //                 className="btn btn-outline-primary " disabled
    //                 onClick={props.onClick}
    //         >
    //             {props.letter}
    //         </button>
    //     )
    // } else {
    return (
        <button id={props.id}
                type="button"
                className="btn btn-outline-primary "
                onClick={props.onClick}
        >
            {props.letter}
        </button>
    )

}
// }
