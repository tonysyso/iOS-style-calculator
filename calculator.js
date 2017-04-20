 var nubmer;
 var number;
 var show_str = "";

 var but_tag = "";
 var display = document.getElementById("shownb");
 var ac = document.getElementById("ac");
 var dot = document.getElementById("dot");
 var zeronb = document.getElementById("zeronb");
 var divide = document.getElementById("divide");
 var times = document.getElementById("times");
 var minus = document.getElementById("minus");
 var add = document.getElementById("add");
 var equals = document.getElementById("equals");
 var remainder = document.getElementById("remainder");
 var pm = document.getElementById("pm");



 var numbers = Array();
 numbers = document.getElementsByClassName("nbt");
 for (x in numbers) {
     numbers[x].onclick = function () {
         show_str = show_str + this.value;

         display.innerHTML = show_str;
         ac.innerHTML = "C";

     }

 }

 ac.onclick = function () {
     ac.innerHTML = "AC";
     display.innerHTML = 0;
     show_str = "";
 }

 dot.onclick = function () {

     show_str = show_str + this.value;

     display.innerHTML = show_str;

 }

 zeronb.onclick = function () {

     show_str = show_str + this.value;

     display.innerHTML = show_str;

 }
 divide.onclick = function () {

     but_tag = this.value;
     number1 = Number(show_str);
     show_str = "";
 }
 divide.onmousedown = function () {
     this.style.color = "black";
 }
 divide.onmouseup = function () {
     this.style.color = "white";
 }

 times.onclick = function () {
     but_tag = this.value;
     number1 = Number(show_str);
     show_str = "";
 }
 times.onmousedown = function () {
     this.style.color = "black";
 }
 times.onmouseup = function () {
     this.style.color = "white";
 }
 minus.onclick = function () {
     but_tag = this.value;
     number1 = Number(show_str);
     show_str = "";
 }
 minus.onmousedown = function () {
     this.style.color = "black";
 }
 minus.onmouseup = function () {
     this.style.color = "white";
 }
 add.onclick = function () {
     but_tag = this.value;
     number1 = Number(show_str);
     show_str = "";
 }
 add.onmousedown = function () {
     this.style.color = "black";
 }
 add.onmouseup = function () {
     this.style.color = "white";
 }

 remainder.onclick = function () {

     but_tag = this.value;
     number1 = Number(show_str);
     show_str = "";
 }
 equals.onclick = function () {
     number2 = Number(show_str);
     switch (but_tag) {
         case "/":
             display.innerHTML = number1 / number2;
             show_str = "";
             break;
         case "*":
             display.innerHTML = number1 * number2;
             show_str = "";
             break;
         case "-":
             display.innerHTML = number1 - number2;
             show_str = "";
             break;
         case "+":
             display.innerHTML = number1 + number2;
             show_str = "";
             break;
         case "%":
             display.innerHTML = number1 % number2;
             show_str = "";
             break;
         default:
             break;
     }

 }
 equals.onmousedown = function () {
     this.style.color = "black";
 }
 equals.onmouseup = function () {
     this.style.color = "white";
 }
 pm.onclick = function () {

     show_str = "-" + show_str;
     display.innerHTML = show_str;
 }