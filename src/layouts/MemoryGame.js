import React from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

class MemoryGame extends React.Component {
    state = {
        cards: [
            {
                id: 0,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 1,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 2,
                active: false,
                color: 'grey',
                end: false

            },
            {
                id: 3,
                active: false,
                color: 'grey',
                end: false

            },
            {
                id: 4,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 5,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 6,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 7,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 8,
                active: false,
                color: 'grey',
                end: false
            },
            {
                id: 9,
                active: false,
                color: 'grey',
                end: false
            },
        ],
    };
    colors = ["red", "red", "yellow", "yellow",
        "blue", "blue", "green", "green", "fuchsia", "fuchsia",
    ];
    drawColors = [];
    counterClick = 0;
    saveColor = [];
    counterEnd = 0;
    time = 0;
    counterError = 0;
    idInterval;

    restoreValues = () => {
        let cards = Array.from(this.state.cards);
        this.counterEnd = 0;
        this.time = 0;
        this.counterError = 0;
        cards.forEach(card => {
            card.color = 'grey';
            card.active = false;
            card.end = false;
            this.setState({
                cards,
            });
        });
    };

    randomColor = () => {
        let copyColors = this.colors.slice();
        for (let index = 0; index < copyColors.length;) {
            const position = Math.floor(Math.random() * copyColors.length);
            this.drawColors.push(copyColors[position]);
            console.log(copyColors[position]);
            copyColors.splice(position, 1);
        }
    };

    changeColor = () => {
        let cards = Array.from(this.state.cards);
        cards.forEach(card => {
            card.color = this.drawColors[card.id];
            card.active = true;
            this.setState({
                cards,
            });
        });
    };

    prompt = () => {
        let cards = Array.from(this.state.cards);
        setTimeout(() => {
            cards.forEach(card => {
                card.active = false;
                this.setState({
                    cards,
                });
            });
        }, 2000);
    };

    stopwatch = () => {
        this.time += 1;
    };

    draw = () => {
        this.restoreValues();
        this.randomColor();
        this.changeColor();
        this.prompt();
        this.idInterval = setInterval(this.stopwatch , 1000);
    };

    checkCards = () => {
        if(this.counterClick % 2 === 0) {
            let cards = Array.from(this.state.cards);
            const index1 = this.saveColor[1];
            const index2 = this.saveColor[3];

            if(this.saveColor[0] === this.saveColor[2]){
                cards[index1].end = true;
                cards[index2].end = true;
                this.counterEnd += 2;
            } else {
                this.counterError += 1;
                setTimeout(() => {
                    cards[index1].active = false;
                    cards[index2].active = false;
                    this.setState({
                        cards,
                    });
                }, 500);

            }
            this.saveColor.splice(0,4);
        }
        if( this.counterEnd === 10){
            console.log("Zakończyłeś grę ! JEsteś geeeenialny!");
            clearInterval(this.idInterval);
        }
    };

    handleClick = (id) => {
        let cards = Array.from(this.state.cards);
        if(cards[id].end === false) {
            if(cards[id].active === false) {
                cards.forEach(card => {
                        if (card.id === id) {
                            card.active = true;
                            this.saveColor.push(card.color, card.id);
                            this.setState({
                                cards,
                            });
                        }
                    }
                );
                this.counterClick++;
            }
        }
        this.checkCards();
    };

    render(){

        let newCard = this.state.cards.map(card =>
            <Card
                key={card.id}
                active={card.active}
                card = {card}
                handleClick = {this.handleClick}
            />
        );

       return(
           <React.Fragment>
           { this.counterEnd === 10 ?
               <div className="alert alert-success" role="alert">
                   <h4 className="alert-heading">Well done!</h4>
                   <p>You have found all pairs in time: {this.time}s<br/>
                       You have mistaken {this.counterError} times.
                   </p>

                   <div className="alert alert-warning" role="alert">
                       <div className="row justify-content-around">
                           <div className="col-4">
                               <button type="button"
                                       className="btn btn-outline-success"
                                       onClick={this.draw}
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

               </div> :
                   <div className={"home"}>
                       <p>MEMORY GAME</p>
                       {newCard}
                       <div>
                           <button
                               onClick={this.draw}
                               type="button"
                               className="btn btn-secondary btn-lg btn-block"
                           >
                               Draw
                           </button>
                       </div>
                   </div>
           }
            </React.Fragment>
            );
    }
}

                export default MemoryGame;