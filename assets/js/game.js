const handPLayer = document.querySelectorAll(".player .hand");
const handCom = document.querySelectorAll(".com .hand");
const refreshGame = document.querySelector(".btn_refresh");


const removeAll = () => {
    handPLayer.forEach((element) => {
        element.classList.remove("highlight");
    });

    handCom.forEach((element) => {
        element.classList.remove("highlight");
    });
    // cek
    document.querySelector("#game-result .player1-win").style.display = "none";
    document.querySelector("#game-result .com-win").style.display = "none";
    document.querySelector("#game-result .game-draw").style.display = "none";
    document.querySelector("#game-result .vs-text").style.display = "inline";
    // cek

};

const removeHighlight = () => {
    handPLayer.forEach((element) => {
        element.classList.remove("highlight");
    });

    handCom.forEach((element) => {
        element.classList.remove("highlight");
    });
};

const player1Win = () => {
    // cek
    document.querySelector("#game-result .player1-win").style.display = "inline";
    document.querySelector("#game-result .com-win").style.display = "none";
    document.querySelector("#game-result .game-draw").style.display = "none";
    document.querySelector("#game-result .vs-text").style.display = "none";
    // cek
};

const comWin = () => {
    // cek
    document.querySelector("#game-result .player1-win").style.display = "none";
    document.querySelector("#game-result .com-win").style.display = "inline";
    document.querySelector("#game-result .game-draw").style.display = "none";
    document.querySelector("#game-result .vs-text").style.display = "none";
    // cek
};

const gameDraw = () => {
    // cek
    document.querySelector("#game-result .player1-win").style.display = "none";
    document.querySelector("#game-result .com-win").style.display = "none";
    document.querySelector("#game-result .game-draw").style.display = "inline";
    document.querySelector("#game-result .vs-text").style.display = "none";
    // cek
};

handPLayer.forEach((element) => {
    element.onclick = () => {
        console.log('Player 1 memilih:', element.id);
        removeHighlight();
        element.classList.add("highlight");

        const comPlay = () => {
            const random = Math.floor(Math.random() * 3);

            let elementCom = null

            if (random == 0) {
                elementCom = document.getElementById("com-batu").classList.add("highlight");
            } else if (random == 1) {
                elementCom = document.getElementById("com-kertas").classList.add("highlight");
            } else if (random == 2) {
                elementCom = document.getElementById("com-gunting").classList.add("highlight");
            }

            let text;
            // switch(random) {
            // case 0:
            //     text = "batu";
            //     break;
            // case 1:
            //     text = "kertas";
            //     break;
            // case 2:
            //     text = "gunting";
            // }

            var textArr = [
                "batu",
                "kertas",
                "gunting"
            ]
            text = textArr[random]

            console.log('Computer memilih:', text);

            const gameResult = () => {
                // [batu(0), kertas(1), gunting(2)]
                switch (element.id + random) {
                    case "batu2":
                    case "kertas0":
                    case "gunting1":
                        console.log("Hasil Permainan: Player 1 Menang");
                        player1Win();
                        break;
                    case "batu1":
                    case "kertas2":
                    case "gunting0":
                        console.log("Hasil Permainan: Com Menang");
                        comWin();
                        break;
                    case "batu0":
                    case "kertas1":
                    case "gunting2":
                        console.log("Hasil Permainan: Permainan Seri");
                        gameDraw();
                        break;
                }
                // console.log(random);
                // console.log(element.id+random)
            }

            gameResult();
        };

        comPlay();

    };
});

refreshGame.onclick = () => {
    console.log("Permainan diulangi");
    removeAll();
};