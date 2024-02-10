// toggle icon navbar
import axios from "axios";

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scoll section active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toogle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scoll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, p, .heading", { origin: "bottom" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portofolio-box, .contact, .heading",
  { origin: "top" }
);
ScrollReveal().reveal(".home-content h1, footer, .about-img", {
  origin: "left",
});

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontent Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data));
// axios.post();
// axios.put();
// axios.delete();
