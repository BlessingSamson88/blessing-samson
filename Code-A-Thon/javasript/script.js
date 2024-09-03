
// set the date we're counting down to
var countdown = new Date ("jan 1,2029 15:37:25").getTimer();

// update the count doen every 1 second
var x = setInterval(function() {

// get today's count down every 1 second
var now = new Date().getTime();

// find the distance betweeen now and the count down date
var distance = countdown - now;

// Time calculation for days ,hours,minutes and seconds
var days = math.floor(distance / (1000 * 60 * 60 * 24));
var hours = math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60* 60));
var minutes = math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60));
var seconds = math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);

// output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + "d" + hours + "h"
+ minutes + "m"+ seconds + "s";

// if the countdown is over, write some text
if (distance < 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

