// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");
  const closebtn = document.getElementById("closebtn");

  hamburgerMenu.addEventListener("click", () => {
    sidebar.style.width = "250px";
  });

  closebtn.addEventListener("click", () => {
    sidebar.style.width = "0";
  });
});
