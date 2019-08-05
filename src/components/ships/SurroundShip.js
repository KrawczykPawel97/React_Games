export const surroundTheShip = (ships, player) => {

    let surroundX = [];
    let surroundY = [];

    for (let counter = 0; counter < ships.length; counter++) {
        for (let counterPlace = ships[counter] - 11; counterPlace < ships[counter] - 8; counterPlace++) {

            if (document.getElementById(counterPlace) === null ||
                document.getElementById(counterPlace).textContent !== "") {
                continue;
            }
            document.getElementById(counterPlace).textContent = "X";
        }
        for (let counterPlace = ships[counter] - 1; counterPlace < ships[counter] + 2; counterPlace++) {
            if (document.getElementById(counterPlace) === null ||
                document.getElementById(counterPlace).textContent !== "") {
                continue;
            }
            document.getElementById(counterPlace).textContent = "X";
        }
        for (let counterPlace = ships[counter] + 9; counterPlace < ships[counter] + 12; counterPlace++) {
            if (document.getElementById(counterPlace) === null ||
                document.getElementById(counterPlace).textContent !== "") {
                continue;
            }
            document.getElementById(counterPlace).textContent = "X";
        }

        for (let i = 0, y = 9; i < 100; i += 10 , y += 10) {
            if (ships[counter] === i) {
                if (document.getElementById(ships[counter] - 11) !== null &&
                    document.getElementById(ships[counter] - 1) !== null &&
                    document.getElementById(ships[counter] + 9) !== null &&
                    document.getElementById(ships[counter] - 11).textContent === "X" &&
                    document.getElementById(ships[counter] - 1).textContent === "X" &&
                    document.getElementById(ships[counter] + 9).textContent === "X"
                ) {
                    document.getElementById(ships[counter] - 11).textContent = "";
                    document.getElementById(ships[counter] - 1).textContent = "";
                    document.getElementById(ships[counter] + 9).textContent = "";
                    if (player) {
                        for (let clear = 0; clear < surroundX.length; clear++)
                            if (this.surroundX[clear] === ships[counter] - 11 ||
                                this.surroundX[clear] === ships[counter] - 1 ||
                                this.surroundX[clear] === ships[counter] + 9
                            ) this.surroundX.splice(clear, 1);
                    } else {
                        for (let clear = 0; clear < surroundY.length; clear++)
                            if (this.surroundY[clear] === ships[counter] - 11 ||
                                this.surroundY[clear] === ships[counter] - 1 ||
                                this.surroundY[clear] === ships[counter] + 9
                            ) this.surroundY.splice(clear, 1);
                    }
                }
            }
            if (ships[counter] === y) {
                if (document.getElementById(ships[counter] + 11) !== null &&
                    document.getElementById(ships[counter] + 1) !== null &&
                    document.getElementById(ships[counter] - 9) !== null &&
                    document.getElementById(ships[counter] + 11).textContent === "X" &&
                    document.getElementById(ships[counter] + 1).textContent === "X" &&
                    document.getElementById(ships[counter] - 9).textContent === "X"
                ) {
                    document.getElementById(ships[counter] + 11).textContent = "";
                    document.getElementById(ships[counter] + 1).textContent = "";
                    document.getElementById(ships[counter] - 9).textContent = "";
                }
            }
        }
    }
};
