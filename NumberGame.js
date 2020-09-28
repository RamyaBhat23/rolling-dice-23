var total1 = 0;
var total2 = 0;
var activePlayer = 0;

function click1() {
    if (activePlayer == 0) {
        activePlayer = 1;
        document.getElementById("p1").setAttribute("class", "disable");
        document.getElementById("p2").setAttribute("class", "enable");
        var x = Math.floor((Math.random() * 10) + 1); //1 to 10
        total1 = total1 + x;
        document.getElementById("total1").innerHTML = total1;
        if (total1 >= 50) {
            document.getElementById("main").style.display = "none";
            document.getElementById("winner").style.display = "block";
            document.getElementById("result").innerHTML = "Player1 won";
        }
    }
}

function click2() {
    if (activePlayer == 1) {
        activePlayer = 0;
        document.getElementById("p2").setAttribute("class", "disable");
        document.getElementById("p1").setAttribute("class", "enable");
        var x = Math.floor((Math.random() * 10) + 1); //1 to 10
        total2 = total2 + x;
        document.getElementById("total2").innerHTML = total2;
        if (total2 >= 50) {
            document.getElementById("main").style.display = "none";
            document.getElementById("winner").style.display = "block";
            document.getElementById("result").innerHTML = "Player2 won";
        }
    }
}