const btnMenu = document.querySelector('#btn-dropdown');
const header = document.querySelector('.header');
const btnsService = document.querySelectorAll('.btn');
const contact = document.querySelector(".contact");
const formsSubjetive = document.getElementById('subject');
const formMessage = document.getElementById('message');
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
let currentTheme = "dark";

btnMenu.onclick = () => {
    header.classList.toggle('active');
}

document.getElementById("btn-theme").addEventListener('click', () => {
    if(currentTheme == "light"){
        currentTheme = "dark";
        moon.style.setProperty("display", "none");
        sun.style.setProperty("display", "inline-block");
    } else {
        currentTheme = "light";
        sun.style.setProperty("display", "none");
        moon.style.setProperty("display", "inline-block");
    }
    document.documentElement.style.setProperty('color-scheme', currentTheme);
});

btnsService.forEach((btn) => {
  btn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: 'smooth'});
    console.log(formsSubjetive.value);
    formsSubjetive.value = "Orçamento - Aplicação " + btn.id;
    formMessage.value = "Olá. Eu gostaria de solicitar um orçamento para...";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // O indicador muda ao atingir 70% da seção
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(`.nav-links li a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          navLink.classList.add("active");
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  });