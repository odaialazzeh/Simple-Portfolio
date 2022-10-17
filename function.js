const mobileBtn = document.getElementById('ham');
const exitBtn = document.getElementById('exit');
const aboutBtn = document.getElementById('about-nav');
const PortfolioBtn = document.getElementById('Portfolio-nav');
const contactBtn = document.getElementById('contact-nav');
const nav = document.querySelector('nav');
mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});
function display() {
  nav.classList.remove('menu-btn');
}

exitBtn.addEventListener('click', display);
aboutBtn.addEventListener('click', display);
PortfolioBtn.addEventListener('click', display);
contactBtn.addEventListener('click', display);