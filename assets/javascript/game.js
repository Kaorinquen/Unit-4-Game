var crystal1;
var crystal2;
var crystal3;
var crystal4
var win = 0;
var loss = 0;

for (i = 1; i > 5; i++)
var startOver = function(){
randomNumber = Math.floor(Math.random() * 120) + 19;
$(".goalNumber").text(randomNumber); 
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
crystalTotal = 0;
}

startOver();

// startOver = function (reset){
//     crystalTotal = 0;
//     this.randomNumber;
//     console.log(reset);
// }

var winsLoses = function (){
    if (crystalTotal === randomNumber) {
        $("#rules").html("YOU WIN!" + "<br>" + "Reload the window to star again");
        startOver();
    }else{ (crystalTotal > randomNumber) {
    $("#rules").html("You got greedy!" + "<br>" + "Reload the page to start again");

}

$("#crys1").on("click", function() {
        points = points + parseInt($("#crystal1").attr("crystal1"));
        $(".points").text(points);
        winLose();
    },

    $("#crys2").on("click", function() {
        points = points + parseInt($("#crystal2").attr("crystal2"));
        $(".points").text(points);
        winLose();
    },

    $("#crys3").on("click", function() {
        points = points + parseInt($("#crystal3").attr("crystal3"));
        $(".points").text(points);
        winLose();
    },

    $("#crys4").on("click", function() {
        points = points + parseInt($("#crystal4").attr("crystal4"));
        $(".points").text(points);
        winLose();
    });
