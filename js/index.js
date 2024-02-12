const button = document.querySelector("button");
const html = document.querySelector(".container");
const css = document.querySelector(".container2");
const title = document.querySelector(".title-effect");
const cssSpan = document.querySelector(".css-span")
const htmlSpan = document.querySelector(".html-span")


button.addEventListener("click", () => {
  html.classList.toggle("hide2");
  css.classList.toggle("hide");
  button.classList.toggle("rotate");
  cssSpan.classList.toggle("red");
  htmlSpan.classList.toggle("html-span");
  cssSpan.style.transition = "1s";
  htmlSpan.style.transition = "1s";



  
});
