let display = ""
let x
let y
let answer
let operation
let memory = []
let work = []
function zero() {
  display = "0" + display
}
function one() {
  display = "1" + display
}
function two() {
  display = "2" + display
}
function three() {
  display = "3" + display
}
function four() {
  display = "4" + display
}
function five() {
  display = "5" + display
}
function sidisplay() {
  display = "6" + display
}
function seven() {
  display = "7" + display
}
function eight() {
  display = "8" + display
}
function nine() {
  display = "9" + display
}
function add() {
  x += display
  x += "+"
  display = ""
}
function minus() {
  x += display
  x += "-"
  display = ""
}
function times() {
  x += display
  x += "*"
  display = ""
}
function divide() {
  x += display
  x += "/"
  display = ""
}
function precentage() {
}
function equals() {
}
function clr() {
}
function consoleDisplay() {
  console.log(operation)
  console.log(display)
  console.log(x)
  console.log(answer)
//  for (let i = 0; i < numbers.length; i++) {
  // let square = numbers[i] * numbers[i];
   //console.log(square);
//}
  console.log(work.length)
}
