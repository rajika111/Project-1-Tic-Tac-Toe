
var gameResult = false;
var count = 0;
let player;
var XTicArray = [];

var turns = 0;               //define each place 
var T1 = $('#T1');
var T2 = $('#T2');
var T3 = $('#T3');
var T4 = $('#T4');
var T5 = $('#T5');
var T6 = $('#T6');
var T7 = $('#T7');
var T8 = $('#T8');
var T9 = $('#T9');

var startMove = function () {       // ask player what he want to play with "X" or "O"
    player = prompt("Waht do want to play with 'X' or 'O'").toUpperCase()

    switch (player) {                 // switchturn btween players
        case "X":
            botMove = "0";
            turn = "X";
            $("#message").text("player " + player + " let's play NOW");
            break;
        case "O":
            botMove = "X";
            turn = "O";
            $("#message").text("player " + player + " let's play NOW");
            break;
        default:
            alert("SORRY!! Chose O or X");
            startMove();
            break;
    }

}
startMove();   ///switch between player turn

const changeTurn = function () {
    if (player == 'X') {
        player = 'O'

    }
    else {
        player = 'X';
    }
}        // Text show a currnt move by player

const handleclick = function () {
    let nPlayer = "";
    if (player == "X") {
        nPlayer = "O"
    } else { nPlayer = "X" }
    $('.move').text(" NEXT MOVE " + nPlayer);
    $(this).addClass(player);
    turns++;
    this.innerHTML = player;
    console.log(turns);

    // to remove a clicked spot
    Result();
    $(this).unbind();
    changeTurn();
};
/// Winner selected spot for "O"
const Result = function () {
    if ($(T1).hasClass('O') && $(T2).hasClass('O') && $(T3).hasClass('O') ||
        $(T4).hasClass('O') && $(T5).hasClass('O') && $(T6).hasClass('O') ||
        $(T7).hasClass('O') && $(T8).hasClass('O') && $(T9).hasClass('O') ||
        $(T3).hasClass('O') && $(T6).hasClass('O') && $(T9).hasClass('O') ||
        $(T1).hasClass('O') && $(T4).hasClass('O') && $(T7).hasClass('O') ||
        $(T2).hasClass('O') && $(T5).hasClass('O') && $(T8).hasClass('O') ||
        $(T1).hasClass('O') && $(T5).hasClass('O') && $(T9).hasClass('O') ||
        $(T3).hasClass('O') && $(T5).hasClass('O') && $(T7).hasClass('O')
    ) {

        // winner massage for player "O"
        $(".massage").append("Player O is win!!");

        $(".Gmw").unbind();
    }                   /// Winner selected spot for "X"
    else if (
        $(T1).hasClass('X') && $(T2).hasClass('X') && $(T3).hasClass('X') ||
        $(T4).hasClass('X') && $(T5).hasClass('X') && $(T6).hasClass('X') ||
        $(T7).hasClass('X') && $(T8).hasClass('X') && $(T9).hasClass('X') ||
        $(T3).hasClass('X') && $(T6).hasClass('X') && $(T9).hasClass('X') ||
        $(T1).hasClass('X') && $(T4).hasClass('X') && $(T7).hasClass('X') ||
        $(T2).hasClass('X') && $(T5).hasClass('X') && $(T8).hasClass('X') ||
        $(T1).hasClass('X') && $(T5).hasClass('X') && $(T9).hasClass('X') ||
        $(T3).hasClass('X') && $(T5).hasClass('X') && $(T7).hasClass('X')

    ) {
        // winner massage for player "X"   
        $(".massage").append("Player X is win!!");
        $(".Gmw").unbind();
    }
    // Tie massage
    else if (turns == 9) {
        $(".massage").append("Tie!!");
        $(".Gmw").unbind();

    }

}    // play again botton
$("#playAgain").click(function () {
    location.reload();
})
$(".Gmw").click(handleclick);

