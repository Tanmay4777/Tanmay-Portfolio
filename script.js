const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.right = "0";
    nav.style.padding = "25px";
    nav.style.background = "#101217";
    nav.style.border = "1px solid #252831";
  }
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 850) nav.style.display = "none";
  });
});
