let userTurn = "X";
let endGame = false;
let turns = 1;
function performLogic(button, text) {
  $(button).hide();
  $(text).text(userTurn);
  if (turns === 9) {
    $(".result").css("color", "white");
    $(".result").text("It's a draw");
  } else if (
    win($("#tile1").text(), $("#tile2").text(), $("#tile3").text()) ||
    win($("#tile4").text(), $("#tile5").text(), $("#tile6").text()) ||
    win($("#tile7").text(), $("#tile8").text(), $("#tile9").text()) ||
    win($("#tile1").text(), $("#tile4").text(), $("#tile7").text()) ||
    win($("#tile2").text(), $("#tile5").text(), $("#tile8").text()) ||
    win($("#tile3").text(), $("#tile6").text(), $("#tile9").text()) ||
    win($("#tile1").text(), $("#tile5").text(), $("#tile9").text()) ||
    win($("#tile3").text(), $("#tile5").text(), $("#tile7").text())
  ) {
    $(".result").css("color", "white");
    $(".result").text(userTurn + " Player wins!");
  } else {
    turns = turns + 1;
    console.log(turns);
  }
  XorO(text);
}

function XorO(tileId) {
  if (userTurn === "X") {
    userTurn = "O";
    $(tileId).css("color", "red");
  } else {
    userTurn = "X";
    $(tileId).css("color", "blue");
  }
}
function win(tile1, tile2, tile3) {
  if (tile1 === userTurn && tile2 === userTurn && tile3 === userTurn) {
    return true;
  }
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});

$(".reset").click(function() {
  $("#button1").show();
  $("#button2").show();
  $("#button3").show();
  $("#button4").show();
  $("#button5").show();
  $("#button6").show();
  $("#button7").show();
  $("#button8").show();
  $("#button9").show();
});
