var countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
var now = new Date().getTime();
var timeleft = countDownDate - now;

// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
}

// Result is output to the specific element
document.getElementById("demo").innerHTML = makeMeTwoDigits(days) + "D:" + makeMeTwoDigits(hours) + "H:" + makeMeTwoDigits(minutes) + "M:" + makeMeTwoDigits(seconds) + "S";

// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("content").innerHTML ="";
    document.getElementById("demo").innerHTML = "HAPPY NEW YEAR!!";
}
}, 1000);