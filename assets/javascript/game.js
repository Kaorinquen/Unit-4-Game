// var crystal1;
// var crystal2;
// var crystal3;
// var crystal4
// var win = 0;
// var loss = 0;

var startOver = function() {
for (i = 0; i > 4; i++) {   
randomNumber = Math.floor(Math.random() * 120) + 19;
$("#crystalNum"[i]) = Math.floor(Math.random() * 12) + 1;
// crystal2 = Math.floor(Math.random() * 12) + 1;
// crystal3 = Math.floor(Math.random() * 12) + 1;
// crystal4 = Math.floor(Math.random() * 12) + 1;
crystalTotal = 0;  
console.log("hello world");
    }
}
$("#goalNumber").text(randomNumber)

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
    }else if (crystalTotal > randomNumber) { 
    $("#rules").html("You got greedy!" + "<br>" + "Reload the page to start again");

}

$("#crys1").on("click", function() {
        points = points + parseInt($("#crystalNum1").attr("crystal1"));
        $(".points").text(points);
        winLose();
    },

    $("#crys2").on("click", function() {
        points = points + parseInt($("#crystalNum2").attr("crystal2"));
        $(".points").text(points);
        winLose();
    },

    $("#crys3").on("click", function() {
        points = points + parseInt($("#crystalNum3").attr("crystal3"));
        $(".points").text(points);
        winLose();
    },

    $("#crys4").on("click", function() {
        points = points + parseInt($("#crystalNum4").attr("crystal4"));
        $(".points").text(points);
        winLose();
    },
