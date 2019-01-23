let display = ""
let mem = []
let memo
let equation
let answer
function zero() {
  display += "0"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function one() {
  display += "1"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function two() {
  display += "2"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function three() {
  display += "3"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function four() {
  display += "4"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function five() {
  display += "5"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function six() {
  display += "6"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function seven() {
  display += "7"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function eight() {
  display += "8"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function nine() {
  display += "9"
  div = document.getElementById("display");
  div.innerHTML = display;
}
function add() {
  display += "+";
  mem.push(display);
  display = ""
}
function minus() {
  display += "-";
  mem.push(display);
  display = ""
}
function times() {
  display += "*";
  mem.push(display);
  display = ""
}
function divide() {
  display += "/";
  mem.push(display);
  display = ""
}
function percentage() {
  display = display * .01
  div = document.getElementById("display");
  div.innerHTML = display;
}
function negation() {
  display = display * -1
  div = document.getElementById("display");
  div.innerHTML = display;
}
function equals() {
  mem.push(display);
  equation = mem.join('')
  display = ""
  answer = eval(equation)
  if (answer==Infinity||answer==undefined){
     document.getElementById('display').innerHTML= "Error";
   }
   else if(answer>=1000000000){
     let exponent=answer.toString().length-1;
     document.getElementById('display').innerHTML=answer/(10**(exponent))+'e'+exponent;

   }
   else if(answer<=-1000000000){
   let exponent=answer.toString().length-2;
   document.getElementById('display').innerHTML=answer/(10**(exponent))+'e'+exponent;
 }
   else{
     document.getElementById('display').innerHTML=answer.toLocaleString();
   }
}
function clr() {
  let display = ""
  mem.length = 0
  let memo = ""
  let equation = " "
  let answer = ""
  div = document.getElementById("display");
  div.innerHTML = display;
}
function decimal() {
    display += ".";
    div = document.getElementById("display");
    div.innerHTML = display;
}
