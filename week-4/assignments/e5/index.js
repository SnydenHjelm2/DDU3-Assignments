class Player {
    static allPlayers = [];
    static randomTwoPlayers() {
        let foundTwoUniqePlayers = false;
        let randomNumber1, randomNumber2;

        while (!foundTwoUniqePlayers) {
            randomNumber1 = Math.floor(Math.random() * this.allPlayers.length);
            randomNumber2 = Math.floor(Math.random() * this.allPlayers.length);

            if (randomNumber1 === randomNumber2) {
            } else {
                foundTwoUniqePlayers = true;
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

        this.html.classList.add("player");

        let fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;

        if (fullName.length > 20) {
            let updatedFullName = `${this.name.first} ${this.name.middle[0]}. ${this.name.last}`;

            if (updatedFullName.length > 20) {
                this.html.innerHTML = `<p>Name: ${this.name.first[0]}. ${this.name.middle[0]}. ${this.name.last} <br>Choice:<span class="choice"></span><br>Wins: <span class="wins">${this.wins}</span></p>`;
            } else {
                this.html.innerHTML = `<p>Name: ${updatedFullName}<br>Choice:<span class="choice"></span><br>Wins:<span class="wins">${this.wins}</span></p>`;
            }
        } else {
            this.html.innerHTML = `<p>Name: ${fullName}<br>"Choice:<span class="choice"></span><br>Wins:<span class="wins">${this.wins}</span></p>`
        }

        Player.allPlayers.push(this);
    }

    go() {
        let choices = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * choices.length);

        this.html.querySelector(`.choice`).textContent = " " + choices[randomNumber];

        return choices[randomNumber];
    }

    won() {
        this.wins++
        this.html.querySelector(`.wins`).textContent = " " + this.wins;
    }
}

let main = document.querySelector("main");
let id = 1;
for (let player of db) {
    new Player(player);
}


Lineup.inint(main, Player.allPlayers);