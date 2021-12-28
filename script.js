var cells = document.getElementsByClassName("cell");
var score_x = document.getElementById("score-x")
var score_o = document.getElementById("score-o")
var score_draw = document.getElementById("score-draw")
var new_game = document.getElementById("new_game")
var player = document.getElementById("2players")
var cpu = document.getElementById("cpu")
var message_x = document.getElementById("win_x")
var message_o = document.getElementById("win_o")


var score_x_counter = 0
var score_o_counter = 0
// ui - front end
var buttons = [[cells[0], cells[1], cells[2]],
[cells[3], cells[4], cells[5]],
[cells[6], cells[7], cells[8]]];

// logic - back-end
var flags = [[null, null, null],
[null, null, null],
[null, null, null]];

var ply = "X"

function show_index(x, y) {
    if (player.checked) {

        if (flags[x][y] == null) {
            if (ply == "X") {
                flags[x][y] = "X"
                buttons[x][y].classList.add("X")
                buttons[x][y].innerHTML = "X"
                ply = "O"
            }

            else if (ply == "O") {
                flags[x][y] = "O"
                buttons[x][y].classList.add("O")
                buttons[x][y].innerHTML = "O"
                ply = "X"
            }
            check_game();

        }
    }
    if (cpu.checked) {

        if (flags[x][y] == null ) {
            if (ply == "X") {
                flags[x][y] = "X";
                buttons[x][y].innerHTML = "X";
                buttons[x][y].classList.add("X");
                ply = "O";

            }
            else if(ply == "O"){
                
                cpuPlayer()
                ply = "X";
            }
    
               
            }
    
            check_game();

        }
    
    



}

    // reset;

function reset() {
    flags = [[null, null, null],
    [null, null, null],
    [null, null, null]];

    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("X");
            buttons[i][j].classList.remove("O");
            ply = "X"
        }
    }

    message_x.style.display = "none"
    message_o.style.display = "none"

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
}

 function cpuPlayer() {


    var i =(getRandomInt(3));
    var j =(getRandomInt(3));


     
    if (flags[i][j] ==null ) {
        flags[i][j] = "O";
        buttons[i][j].innerHTML ="O";
        buttons[i][j].classList.add("O");
    }
    else {
        cpuPlayer();
    }

            console.log(i,j)
            console.log(buttons[i][j])

}
    
    function message(){
        if(score_x_counter++){
            message_x.style.display = "block"
        }

        if(score_o_counter++){
            message_o.style.display = "block"

        }
    }
        
    function check_game() {
        // X check
        if (flags[0][0] == "X" && flags[0][1] == "X" && flags[0][2] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;
            message()

        }

        if (flags[1][0] == "X" && flags[1][1] == "X" && flags[1][2] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;
            message()

        }

        if (flags[2][0] == "X" && flags[2][1] == "X" && flags[2][2] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;   
            message()

        }

        if (flags[0][0] == "X" && flags[1][0] == "X" && flags[2][0] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;        
            message()

        }

        if (flags[0][1] == "X" && flags[1][1] == "X" && flags[2][1] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;        
            message()

        }

        if (flags[0][2] == "X" && flags[1][2] == "X" && flags[2][2] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;       
            message()
        }

        if (flags[0][0] == "X" && flags[1][1] == "X" && flags[2][2] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;       
            message()
        }

        if (flags[0][2] == "X" && flags[1][1] == "X" && flags[2][0] == "X") {
            score_x_counter++;
            score_x.innerHTML = score_x_counter;       
            message()
        }

        // O check

        if (flags[0][0] == "O" && flags[0][1] == "O" && flags[0][2] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;
            message()

        }

        if (flags[1][0] == "O" && flags[1][1] == "O" && flags[1][2] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;       
            message()
        }

        if (flags[2][0] == "O" && flags[2][1] == "O" && flags[2][2] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;      
            message()
        }

        if (flags[0][0] == "O" && flags[1][0] == "O" && flags[2][0] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;       
            message()
        }

        if (flags[0][1] == "O" && flags[1][1] == "O" && flags[2][1] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;       
            message()
        }

        if (flags[0][2] == "O" && flags[1][2] == "O" && flags[2][2] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;       
            message()
        }

        if (flags[0][0] == "O" && flags[1][1] == "O" && flags[2][2] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;       
            message()
        }

        if (flags[0][2] == "O" && flags[1][1] == "O" && flags[2][0] == "O") {
            score_o_counter++;
            score_o.innerHTML = score_o_counter;
            message()
       
        }



    }
