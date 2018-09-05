var characters = [
    {
        "name": "Marshall",
        "lines": [
            "It looks like someone suffered from premature slapulation.",
            "This is a pie chart describing my favorite bars. And this is a bar graph describing my favorite pies.",
            "The only people in the universe who haven't seen Star Wars are the characters in Star Wars."
        ]

    },

    {
        "name": "Lily",
        "lines": [
            "Where's the poop?",
            "Thank you, Linus.",
            "The no more surprises thing is the best part of being married."
        ]

    },

    {
        "name": "Ted",
        "lines": [
            "Nothing good happens after 2AM.",
            "She didn't even give me the signal!",
            "I would open a vein in my arm if I could bleed that locket out, just to make her happy."
        ]

    },

    {
        "name": "Robin",
        "lines": [
            "Nobody asked you Patrice.",
            "Guys are like the subway. You miss one, another one comes along in five minutes.",
            "I like sports cars, but that doesn't mean I wanna push a Ferrari through my vagina."
        ]

    },

    {
        "name": "Barney",
        "lines": [
            "Have you met Ted?",
            "Whenever I'm sad, I stop being sad and be awesome instead.",
            "Suit up!"
        ]

    }
];

var Pictures = document.getElementsByClassName("picture");
var acertos = 0;
var erros = 0;
lines_to_sort = [];
var sorted_line;
var jogo_rodando = true;
var chances = 7;

for (var a = 0; a < characters.length; a++) {
    var character = characters[a];
    for (var b = 0; b < (character["lines"]).length; b++){
        var lines = character["lines"];
        lines_to_sort.push(lines[b]);
    }
}

function sort_line() {
    sorted_line = lines_to_sort[Math.floor(Math.random() * lines_to_sort.length)];
    lines_to_sort.splice(lines_to_sort.indexOf(sorted_line), 1);
    document.getElementById("frase").innerText = sorted_line;
}

    sort_line();

for (var c = 0; c < Pictures.length; c++) {
    Pictures[c].onmousedown = function () {
        if (!jogo_rodando)
            return;

        var pict = this.id;
        console.log(pict);
        console.log(sorted_line);
        for (var a = 0; a < characters.length; a++) {
            var character = characters[a];
            if (character["name"] === pict) {
                // for (var b = 0; b < (character["lines"]).length; b++) {
                var lines = character["lines"];
                console.log(lines);
                console.log(sorted_line);
                console.log(lines.indexOf(sorted_line));
                if (lines.indexOf(sorted_line) >= 0) {
                    acertos++;
                    document.getElementById("acertos").innerText = acertos;
                    console.log("Você acertou!");
                }
                else {
                    erros++;
                    document.getElementById("erros").innerText = erros;
                    console.log("Você errou :(");
                }
            }
        }
        if (erros < chances && acertos < chances && lines_to_sort.length > 0) {
            sort_line();
        }

        else if (erros >= chances) {
            document.getElementById("resultado").innerText = "Game over! Você perdeu :(\n Hora de maratonar mais uma vez.";
            console.log("Game over! Você perdeu :(\n Hora de maratonar mais uma vez.");
            jogo_rodando = false;
        }

        else if (acertos >= chances) {
            document.getElementById("resultado").innerText = "Você venceu! Parabéns! \n Já pode maratonar mais uma vez.";
            console.log("Você venceu! Parabéns! \n Já pode maratonar mais uma vez.")
            jogo_rodando = false;
        }
    }
}
