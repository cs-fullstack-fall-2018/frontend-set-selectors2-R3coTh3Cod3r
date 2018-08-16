var pTag = document.getElementById("first");
console.log(pTag);

var uTag = document.getElementsByClassName("special");
console.log(uTag);

var vTag = document.getElementsByTagName("p");
console.log(vTag);

var special = document.querySelector("special");
console.log(special);

var specicalone = document.querySelectorAll("special");
console.log(specicalone);

var h1statement = document.getElementsByTagName("h1");
h1statement[0].style.color="blue";
var lastpTag = document.getElementById("last");
console.log(lastpTag);
lastpTag.style.color="yellow";