//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World!";

//const button = document.querySelector("button");

document
  .querySelector("button")
  .addEventListener("click", irritationLevel("kjh"));

//function () {
//  document.querySelector("h1").innerHTML = "arg";
//});

function irritationLevel(level) {
  //alert(`This is ${level}!`);
  document.querySelector("h1").innerHTML = level;
}
