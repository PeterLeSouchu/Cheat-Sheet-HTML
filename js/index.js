const button = document.querySelector("button");
const html = document.querySelector(".container");
const css = document.querySelector(".container2");
// console.log(css);

button.addEventListener("click", () => {
  html.classList.toggle("hide2");
  css.classList.toggle("hide");
});
