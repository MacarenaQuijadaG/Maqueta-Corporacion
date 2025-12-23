document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
      title.style.color = "#747975"; 
    });
    title.addEventListener("mouseout", () => {
      title.style.color = "#0a0a0a"; 
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });     
