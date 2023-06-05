let num = 0;
let show = document.querySelector(".show");

function showQuantity() {
  show.innerText = `Cart quantity: ${num}`;
}

function addToCart() {
  show.innerText = `Cart quantity: ${(num += 1)}`;
}

function add2() {
  show.innerText = `Cart quantity: ${(num += 2)}`;
}

function add3() {
  show.innerText = `Cart quantity: ${(num += 3)}`;
}

function resetCart() {
  show.innerText = `Cart was reset. 
  Cart quantity: ${(num = 0)}`;
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", showQuantity);

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", addToCart);

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", add2);

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", add3);

let reset = document.getElementById("btn5");
reset.addEventListener("click", resetCart);
