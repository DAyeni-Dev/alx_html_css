document.addEventListener('DOMContentLoaded', function () {
  console.log("Script is loaded ✅"); // Debug
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    console.log("Hamburger clicked! 🍔");
  });
});
