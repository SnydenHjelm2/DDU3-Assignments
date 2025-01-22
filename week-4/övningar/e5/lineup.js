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
        let match = document.createElement("button");
        newPair.textContent = "New Pair";
        match.textContent = "Match!";
        newPair.addEventListener("click", () => {Lineup.newPair()});
        match.addEventListener("click", () => {Lineup.match()});
        document.querySelector(".control").appendChild(newPair);
        document.querySelector(".control").appendChild(match);

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
        }
    }

    static newPair() {
        console.log(Lineup.matchPlayers);
        for (let i=Lineup.matchPlayers.length; i>0; i--) {
            Lineup.renderPlayer("lineup", Lineup.matchPlayers[i - 1].html);
            Lineup.matchPlayers.splice(i - 1, 1);
        }

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

        if ((p1Choice === "rock" && p2Choice === "rock") || (p1Choice === "paper" && p2Choice === "paper") || (p1Choice === "scissors" && p2Choice === "scissors")) {
            alert("Its a tie!");
        } else if ((p1Choice === "rock" && p2Choice === "scissors") || (p1Choice === "paper" && p2Choice === "rock") || (p1Choice === "scissors" && p2Choice === "paper")) {
            player1.won();
        } else if ((p2Choice === "rock" && p1Choice === "scissors") || (p2Choice === "paper" && p1Choice === "rock") || (p2Choice === "scissors" && p1Choice === "paper")) {
            player2.won();
        }
    }
}