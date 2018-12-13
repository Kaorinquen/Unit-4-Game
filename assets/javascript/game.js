var crystal1;
var crystal2;
var crystal3;
var crystal4
var win = 0;
var loss = 0;

randomNumber = Math.floor(Math.random() * 120) + 19;
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
crystalTotal = 0;

var reset = function (reset){
    crystalTotal = 0;
    this.randomNumber;
    console.log(reset);
}

crystal1.randomNumber