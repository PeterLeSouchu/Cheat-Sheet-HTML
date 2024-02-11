const button = document.querySelector("button");
const html = document.querySelector(".container");
const css = document.querySelector(".container2");
const title = document.querySelector(".title-effect");


button.addEventListener("click", () => {
  html.classList.toggle("hide2");
  css.classList.toggle("hide");
  button.classList.toggle("rotate");
  
});
