var primary = document.getElementById("btnP");
var general = document.getElementById("btnG");
var solution = document.getElementById("btnS");
primary.addEventListener("click", set_page);
general.addEventListener("click", set_page2);
solution.addEventListener("click", set_page1);
function set_page() {
  document.getElementById("display").style.display = "block";
  document.getElementById("display1").style.display = "none";
  document.getElementById("display2").style.display = "none";
}
function set_page2() {
  document.getElementById("display").style.display = "none";
  document.getElementById("display1").style.display = "block";
  document.getElementById("display2").style.display = "none";
}
function set_page1() {
  document.getElementById("display").style.display = "none";
  document.getElementById("display1").style.display = "none";
  document.getElementById("display2").style.display = "block";
}
// sound start
// var bleep = new Audio();
// bleep.src = "mp3/Notification - Notification.mp3";
