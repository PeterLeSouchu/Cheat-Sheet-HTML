const button = document.querySelector("button");
const html = document.querySelector(".container");
const css = document.querySelector(".container2");
const title = document.querySelector(".title-effect");
const span = document.querySelector(".change-span")


button.addEventListener("click", () => {
  html.classList.toggle("hide2");
  css.classList.toggle("hide");
  button.classList.toggle("rotate");
  span.classList.toggle("red");
  span.style.transition = "1s";
  change();
});

 function change() {
  if (span.textContent === "HTML") {
    span.innerHTML = `CSS`;
  }
  else {
    span.innerHTML = `HTML`;
  }
 }