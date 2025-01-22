const db = [
    {
      "name": {"first": "Kristoffer", "middle": "Gustav", "last": "Johansson"},
      "color": "SkyBlue"
    },
    {
      "name": {"first": "Parvaneh", "middle": "Shirin", "last": "Farahani"},
      "color": "Crimson"
    },
    {
      "name": {"first": "Anamarija", "middle": "Ivana", "last": "Kovačević"},
      "color": "MediumSeaGreen"
    },
    {
      "name": {"first": "Abdulrahman", "middle": "Mohammed", "last": "Al-Masri"},
      "color": "DarkOrange"
    }
  ];

class Player {
    static allPlayers = [];
    static randomTwoPlayers() {
        let foundTwoUniqePlayers = false;
        let randomNumber1;
        let randomNumber2;

        while (!foundTwoUniqePlayers) {
            let rN1 = Math.floor(Math.random() * this.allPlayers.length);
            let rN2 = Math.floor(Math.random() * this.allPlayers.length);

            if (rN1 === rN2) {
                continue;
            } else {
                foundTwoUniqePlayers = true;
                randomNumber1 = rN1;
                randomNumber2 = rN2;
            }
        }

        return {
            chosenPlayer1: Player.allPlayers[randomNumber1],
            chosenPlayer2: Player.allPlayers[randomNumber2]
        }
    }

    constructor(data) {
        this.name = data.name;
        this.color = data.color;
        this.wins = 0;
        this.html = document.createElement("div");
        this.html.style.backgroundColor = this.color;

        let fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;

        if (fullName.length > 20) {
            let updatedFullName = `${this.name.first} ${this.name.middle[0]}. ${this.name.last}`;

            if (updatedFullName.length > 20) {
                this.html.innerHTML = `<p>Name: ${this.name.first[0]}. ${this.name.middle[0]}. ${this.name.last} <br>Choice:<br>Wins: ${this.wins}</p>`;
            } else {
                this.html.innerHTML = `<p>Name: ${updatedFullName}<br>Choice:<br>Wins: ${this.wins}</p>`;
            }
        } else {
            this.html.innerHTML = `<p>Name: ${fullName}<br>Choice:<br>Wins: ${this.wins}</p>`
        }

        Player.allPlayers.push(this);
    }

    go() {
        let choices = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * choices.length);
        
        let fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;

        if (fullName.length > 20) {
            let updatedFullName = `${this.name.first} ${this.name.middle[0]}. ${this.name.last}`;

            if (updatedFullName.length > 20) {
                this.html.innerHTML = `<p>Name: ${this.name.first[0]}. ${this.name.middle[0]}. ${this.name.last} <br>Choice: ${choices[randomNumber]}<br>Wins: ${this.wins}</p>`;
            } else {
                this.html.innerHTML = `<p>Name: ${updatedFullName}<br>Choice: ${choices[randomNumber]}<br>Wins: ${this.wins}</p>`;
            }
        } else {
            this.html.innerHTML = `<p>Name: ${fullName}<br>Choice: ${choices[randomNumber]}<br>Wins: ${this.wins}</p>`
        }
    }

    won() {
        this.wins++

        let fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;

        if (fullName.length > 20) {
            let updatedFullName = `${this.name.first} ${this.name.middle[0]}. ${this.name.last}`;

            if (updatedFullName.length > 20) {
                this.html.innerHTML = `<p>Name: ${this.name.first[0]}. ${this.name.middle[0]}. ${this.name.last} <br>Choice:<br>Wins: ${this.wins}</p>`;
            } else {
                this.html.innerHTML = `<p>Name: ${updatedFullName}<br>Choice:<br>Wins: ${this.wins}</p>`;
            }
        } else {
            this.html.innerHTML = `<p>Name: ${fullName}<br>Choice:<br>Wins: ${this.wins}</p>`
        }
    }
}

let player1 = new Player(db[0]);
let player2 = new Player(db[1]);
let player3 = new Player(db[2]);
let player4 = new Player(db[3]);

document.body.appendChild(player1.html);
document.body.appendChild(player2.html);
document.body.appendChild(player3.html);
document.body.appendChild(player4.html);