const button = document.querySelector("button");
const html = document.querySelector(".container");
const css = document.querySelector(".container2");
const title = document.querySelector(".title-effect");
// console.log(title);

button.addEventListener("click", () => {
  html.classList.toggle("hide2");
  css.classList.toggle("hide");
  button.classList.toggle("rotate");
  title.classList.toggle("hide3");
});
