

$(document).ready(function() {
    crystalTotal = 0;  
    points = 0;
    
    var startOver  = function () {

        randomNumber = Math.floor(Math.random() * 120) + 19;
        crystal = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        crystalTotal = 0;  
        points = 0;
        console.log("hello world");
    }

    
// startOver = function (reset){
//     crystalTotal = 0;
//     this.randomNumber;
//     console.log(reset);
// }

var winLose = function (){
    if (points === randomNumber) {
        $("#rules").html("YOU WIN!" + "<br>" + "Reload the window to star again");
        startOver();
    }else if (points > randomNumber) { 
    $("#rules").html("You got greedy!" + "<br>" + "Reload the page to start again");

}

}

$("#crys1").on("click", function() {
        points = points + parseInt($("#crys1").attr("crystal1"));
        $(".points").text(points);
        winLose();
        console.log(points);
    });

    $("#crys2").on("click", function() {
        points = points + parseInt($("crystal2").attr("#crystal2"));
        $(".points").text(points);
        winLose();
        console.log(points);
    });

    $("#crys3").on("click", function() {
        points = points + parseInt($("crystal3").attr("#crystal3"));
        $(".points").text(points);
        winLose();
        console.log(points);
    });

    $("#crys4").on("click", function() {
        points = points + parseInt($("crystal4").attr("#crystal4"));
        $(".points").text(points);
        winLose();
        console.log(points);
    });
    startOver();
    document.getElementById("goalNumber").innerHTML = randomNumber;
});