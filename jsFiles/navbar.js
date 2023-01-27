const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const content = document.querySelector(".content");
let visible = false;

hamburger.addEventListener("click", () => {
  if (!visible) {
    navLinks.style.display = "flex";
    content.style.display = "none";
  } else {
    navLinks.style.display = "none";
    content.style.display = "block";
  }
  visible = !visible;
});

window.addEventListener("resize", () => {
  let w = document.documentElement.clientWidth;
  if (w >= 768) {
    navLinks.style.display = "flex";
    content.style.display = "block";
    visible = false;
  } else {
    navLinks.style.display = "none";
  }
});
