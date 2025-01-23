class Lineup {
    static matchPlayers = [];
    static inint(parent, players) {
        let lineupDiv = document.createElement("div");
        let matchDiv = document.createElement("div");
        let control = document.createElement("div");
        lineupDiv.classList.add("lineup");
        matchDiv.classList.add("match");
        control.classList.add("control");
        parent.appendChild(lineupDiv);
        parent.appendChild(matchDiv);
        parent.appendChild(control);

        let newPair = document.createElement("button");
        let matchB = document.createElement("button");
        newPair.textContent = "New Pair";
        matchB.textContent = "Match!";
        newPair.addEventListener("click", () => {Lineup.newPair()});
        matchB.addEventListener("click", () => {Lineup.match()});
        document.querySelector(".control").appendChild(newPair);
        document.querySelector(".control").appendChild(matchB);

        for (let player of players) {
            Lineup.renderPlayer("lineup", player.html);
        }
    }

    static renderPlayer(where, player) {
        let lineup = document.querySelector(".lineup");
        let match = document.querySelector(".match");

        if (where === "lineup") {
            lineup.appendChild(player);
        } else if (where === "match") {
            match.appendChild(player);
        } else {
            console.error("you donkey wrong parameter");
        }
    }

    static newPair() {
        for (let player of Lineup.matchPlayers) {
            Lineup.renderPlayer("lineup", player.html);
        }
        Lineup.matchPlayers.length = 0;

        let pair = Player.randomTwoPlayers();
        Lineup.renderPlayer("match", pair.chosenPlayer1.html);
        Lineup.renderPlayer("match", pair.chosenPlayer2.html);
        Lineup.matchPlayers.push(pair.chosenPlayer1, pair.chosenPlayer2);
    }

    static match() {
        let player1 = Lineup.matchPlayers[0];
        let player2 = Lineup.matchPlayers[1];

        let p1Choice = player1.go();
        let p2Choice = player2.go();
        console.log(p1Choice, p2Choice);

        if (p1Choice === p2Choice) {
            alert("Its a tie!");
        } else if ((p1Choice === "rock" && p2Choice === "scissors") || (p1Choice === "paper" && p2Choice === "rock") || (p1Choice === "scissors" && p2Choice === "paper")) {
            player1.won();
        } else if ((p2Choice === "rock" && p1Choice === "scissors") || (p2Choice === "paper" && p1Choice === "rock") || (p2Choice === "scissors" && p1Choice === "paper")) {
            player2.won();
        }
    }
}