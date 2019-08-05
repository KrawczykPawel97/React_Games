import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Ships.css'
import Board from "../components/ships/Board";
import AlertShips from "../components/ships/AlertShips";
import ChangePlayer from "../components/ships/ChangePlayer";
import BoardShotX from "../components/ships/BoardShotX";
import BoardX from "../components/ships/BoardX";
import BoardShotY from "../components/ships/BoardShotY";
import BoardY from "../components/ships/BoardY";
import EndGame from "../components/ships/EndGame";
import {surroundTheShip} from "../components/ships/SurroundShip";

class Ships extends React.Component {
    state = {
        playerX: true,
        setShips: true,
        ShipsX: [],
        ShipsY: [],
        alert: true,
        ShotX: [],
        ShotY: [],
    };

    counterEndX = 0;
    counterEndY = 0;
    counterClick = 1;
    endSet = 0;
    saveFirstCoordinates;
    score = '';

    setShip(i, textCounter) {
        const distanceCol = this.counterClick === 2 ? 30 :
            (this.counterClick > 3 && this.counterClick < 7) ? 20 : 10;
        const distanceRow = distanceCol / 10;
        if (this.counterClick > 12) {
            if (textCounter.textContent === "") {
                this.fillInTheShip(i, i);
                this.drawShips();
                surroundTheShip(this.state.playerX ? this.state.ShipsX : this.state.ShipsY, this.state.playerX);
                this.counterClick++;
                if (this.counterClick === 17) {
                    this.counterClick = 1;
                    this.endSet++;
                    let player = this.state.playerX;
                    this.setState({
                        playerX: !player,
                        alert: true
                    });
                    if (this.endSet === 2) {
                        this.setState({
                            setShips: false,
                        });
                    }
                    return;
                }
                return;
            }
        }

        if (this.counterClick % 2 === 1) {
            if (textCounter.textContent === "") {
                this.saveFirstCoordinates = i;
                textCounter.textContent = "!";
                this.counterClick++;
            }
        } else {
            if (textCounter.textContent === "" &&
                (this.saveFirstCoordinates - i === distanceCol ||
                    this.saveFirstCoordinates - i === -distanceCol ||
                    this.saveFirstCoordinates - i === distanceRow ||
                    this.saveFirstCoordinates - i === -distanceRow
                )) {
                this.fillInTheShip(this.saveFirstCoordinates, i);
                this.drawShips();
                surroundTheShip(this.state.playerX ? this.state.ShipsX : this.state.ShipsY, this.state.playerX);
                this.counterClick++;
            }
        }
    }

    fillInTheShip(first, last) {
        let save = this.state.playerX ? this.state.ShipsX : this.state.ShipsY;
        if (first > last) {
            if (first - 5 > last) {
                for (let counter = first; counter >= last; counter -= 10) {
                    save.push(counter);
                    if (this.state.playerX) {
                        this.setState({
                            ShipsX: save
                        })
                    } else {
                        this.setState({
                            ShipsY: save
                        })
                    }
                }
            } else {
                for (let counter = first; counter >= last; counter--) {
                    save.push(counter);
                    if (this.state.playerX) {
                        this.setState({
                            ShipsX: save
                        })
                    } else {
                        this.setState({
                            ShipsY: save
                        })
                    }
                }
            }
        } else if (first === last) {
            save.push(first);
            if (this.state.playerX) {
                this.setState({
                    ShipsX: save
                })
            } else {
                this.setState({
                    ShipsY: save
                })
            }
        } else {
            if (last - 5 > first) {
                for (let counter = last; counter >= first; counter -= 10) {
                    save.push(counter);
                    if (this.state.playerX) {
                        this.setState({
                            ShipsX: save
                        })
                    } else {
                        this.setState({
                            ShipsY: save
                        })
                    }
                }
            } else {
                for (let counter = last; counter >= first; counter--) {
                    save.push(counter);
                    if (this.state.playerX) {
                        this.setState({
                            ShipsX: save
                        })
                    } else {
                        this.setState({
                            ShipsY: save
                        })
                    }
                }
            }

        }
    }

    drawShips() {
        let save = this.state.playerX ? this.state.ShipsX : this.state.ShipsY;
        for (let counter = 0; counter < save.length; counter++) {
            document.getElementById(save[counter]).textContent = "!";
        }
    }



    changePlayer(){
        this.setState({
            alert: false
        });
    }

    onClick(i) {
        let a = document.getElementById(i);
        if(this.state.setShips === true){
            this.setShip(i, a);
        } else {
            if(this.state.playerX){
                this.shotPlayerX(i);
            } else {
                this.shotPlayerY(i);
            }
        }
    }

    shotPlayerX(i) {
        if (document.getElementById(i).textContent === '') {
            let shotX = this.state.ShotX;
            let player = this.state.playerX;
            let find = false;
            shotX.push(i - 200);

            for (let counter = 0; counter < this.state.ShipsY.length; counter++) {
                if (shotX.slice(-1).pop() === this.state.ShipsY[counter]) {
                    this.counterEndY += 1;
                    find = true;
                }
            }
            find ? this.score = 'Trafiony !' : this.score = 'Pudło !';
            this.setState({
                ShotX: shotX,
                alert: true,
                playerX: !player,
            });
        }
    }

    shotPlayerY(i) {
        if (document.getElementById(i).textContent === '') {
            let shotY = this.state.ShotY;
            let player = this.state.playerX;
            let find = false;
            shotY.push(i - 400);
            for (let counter = 0; counter < this.state.ShipsX.length; counter++) {
                if (shotY[shotY.length - 1] === this.state.ShipsX[counter]) {
                    find = true;
                    this.counterEndX += 1;
                }
            }
            find ? this.score = 'Trafiony !' : this.score = 'Pudło !';

            this.setState({
                ShotY: shotY,
                alert: true,
                playerX: !player,
            });
        }
    }

    drawForPlayerX(){
        let shipsX = this.state.ShipsX;
        let shotY = this.state.ShotY;
        let shotX = this.state.ShotX;
        let shipsY = this.state.ShipsY;



        setInterval(function() {
            if (document.getElementById('399') !== null) {
                    for (let counterShot = 0; counterShot < shotY.length; counterShot++) {
                        for (let counterShips = 0; counterShips < shipsX.length; counterShips++) {
                            if (shotY[counterShot] === shipsX[counterShips])
                                document.getElementById(shotY[counterShot] + 300).textContent = "O";
                        }
                    }

                for (let counter = 0; counter < shotY.length; counter++) {
                    if (document.getElementById(shotY[counter] + 300).textContent === ""){
                        document.getElementById(shotY[counter] + 300).textContent = "X";
                    }
                }

                for (let counter = 0; counter < shipsX.length; counter++) {
                    if (document.getElementById(shipsX[counter] + 300).textContent === "")
                        document.getElementById(shipsX[counter] + 300).textContent = "!";
                }

                for (let counterShot = 0; counterShot < shotX.length; counterShot++) {
                    for (let counterShips = 0; counterShips < shipsY.length; counterShips++) {
                        if (shotX[counterShot] === shipsY[counterShips])
                            document.getElementById(shotX[counterShot] + 200).textContent = "O";
                    }
                }

                for (let counter = 0; counter < shotX.length; counter++) {
                    if(document.getElementById(shotX[counter] + 200).textContent === "")
                        document.getElementById(shotX[counter] + 200).textContent = "X";
                }

            }
        }, 100);
    }

    drawForPlayerY(){
        let shipsY = this.state.ShipsY;
        let shotX = this.state.ShotX;
        let shotY = this.state.ShotY;
        let shipsX = this.state.ShipsX;
        setInterval(function() {
            if (document.getElementById('599') !== null) {
                    for (let counterShot = 0; counterShot < shotX.length; counterShot++) {
                        for (let counterShips = 0; counterShips < shipsY.length; counterShips++) {
                            if (shotX[counterShot] === shipsY[counterShips]) {
                                    document.getElementById(shotX[counterShot] + 500).textContent = "O";
                            }
                        }
                    }
                    for (let counter = 0; counter < shotX.length; counter++) {
                        if(document.getElementById(shotX[counter] + 500).textContent === "")
                        document.getElementById(shotX[counter] + 500).textContent = "X";
                    }

                for (let counter = 0; counter < shipsY.length; counter++) {
                    if(document.getElementById(shipsY[counter]+500).textContent === "")
                    document.getElementById(shipsY[counter]+500).textContent = "!";
                }

                for (let counterShot = 0; counterShot < shotY.length; counterShot++) {
                    for (let counterShips = 0; counterShips < shipsX.length; counterShips++) {
                        if (shotY[counterShot] === shipsX[counterShips]) {
                            document.getElementById(shotY[counterShot] + 400).textContent = "O";
                        }
                    }
                }
                for (let counter = 0; counter < shotY.length; counter++) {
                    if(document.getElementById(shotY[counter] + 400).textContent === "")
                    document.getElementById(shotY[counter] + 400).textContent = "X";
                }
            }
        }, 100);

    }

    statistics(){
        let hitX = 0, hitY = 0, letter = this.state.playerX ? 'O' : 'X';

        for(let counterShot = 0; counterShot < this.state.ShotX.length; counterShot++)
            for(let counterShip = 0; counterShip < this.state.ShipsY.length; counterShip++)
                if (this.state.ShotX[counterShot] === this.state.ShipsY[counterShip])
                    hitX++;

        for(let counterShot = 0; counterShot < this.state.ShotY.length; counterShot++)
            for(let counterShip = 0; counterShip < this.state.ShipsX.length; counterShip++)
                if (this.state.ShotY[counterShot] === this.state.ShipsX[counterShip])
                    hitY++;

        return [hitX, hitY , letter];
    }

    render(){
        let letter = this.state.playerX ? 'X' : 'Y';
        let status = 'Player ' + letter;
        let statistics = this.statistics();

        let title = 'Congratulations Player'+ statistics[2] + ', You Win !';
        let body1 = `Player X made ${this.state.ShotX.length} shoots & hit ${statistics[0]} times`;
        let body2 = `Player Y made ${this.state.ShotY.length} shoots & hit ${statistics[1]} times`;
         return(
            <React.Fragment>
                <div className="game">
                    {(this.counterEndX === 20 || this.counterEndY === 20) ?
                        <EndGame title = {title}
                                 body1 = {body1}
                                 body2 = {body2}
                        />
                        :
                        this.state.alert  ?
                        <ChangePlayer player={"Player " + letter}
                                      onClick={() => this.changePlayer()}
                                      setShip = {this.state.setShips}
                                      score = {this.score}
                        /> :
                        <div>
                        <p id={"stats"}>{status}</p>
                        {this.state.setShips ?
                            <div className={"row"}>
                                <div className={"col"}>
                                    <p id={"stats"}>Set Ships</p>
                                    <Board onClick={(i) => this.onClick(i)}/>
                                </div>
                                <div className={"col"}>
                                    <p id={"stats"}>Prompt</p>
                                    <AlertShips body={this.counterClick}/>
                                </div>
                            </div> : this.state.playerX ?
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <p id={"stats"}>Your Shot</p>
                                            <BoardShotX onClick={(i) => this.onClick(i)}/>
                                        </div>
                                        <div className={"col"}>
                                            <p id={"stats"}>Your Ship</p>
                                            <BoardX body={this.counterClick}/>
                                        </div>
                                        {this.drawForPlayerX()}
                                    </div>
                                :
                                <div className={"row"}>
                                    <div className={"col"}>
                                        <p id={"stats"}>Your Shot</p>
                                        <BoardShotY onClick={(i) => this.onClick(i)}/>
                                    </div>
                                    <div className={"col"}>
                                        <p id={"stats"}>Your Ship</p>
                                        <BoardY body={this.counterClick}/>
                                    </div>
                                    {this.drawForPlayerY()}
                                </div>
                        }
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Ships;