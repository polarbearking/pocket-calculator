let display = ""
let x
let y
let answer
let operation
let memory = ""
function clear() {
  x = "";
  y = "";
  display = "";
  console.log(display)
}
function zero() {
  display = "0" + display
  document.getElementById("display").innerHTML= "0"
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
function six() {
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
  x = display
  operation = "+"
  display = ""
}
function minus() {
  x = display
  operation = "-"
  display = ""
}
function times() {
  x = display
  operation = "*"
  display = ""
}
function divide() {
  x = display
  operation = "/"
  display = ""
}
function precentage() {

}
function equals() {
  y = display
  x = Number(x)
  y = Number(y)
  if (operation === "+") {
    answer = x + y
  }
  if (operation === "-") {
    answer = x - y
  }
  if (operation === "*") {
    answer = x * y
  }
  if (operation === "/") {
    answer = x / y
  }
  memory = answer
}
function consoleDisplay() {
  console.log(operation)
  console.log(display)
  console.log(x)
  console.log(answer)
}
