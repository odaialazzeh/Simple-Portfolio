/* mobile menu code */

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

/* popup window for mobile-version */

const popup = {
  img: ['images/SnapshootPortfolio.svg', 'images/Icon-Cancel-pop.svg', 'images/Disable-pop.svg', 'images/SnapshootPortfolio1.PNG'],
  heading: 'Keeping track of hundreds of components',
  technologies: [
    'Ruby on rails', 'css', 'JavScript',
  ],
  technologies1: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveversion: ['#', 'See Live', 'images/Icon-Export.svg'],
  source: ['#', 'See Source', 'images/Icon-GitHub.svg'],
};

const div = document.createElement('div');
div.className = 'popup';
div.id = 'popup';

const img = document.createElement('img');
img.src = `${popup.img[0]}`;
div.appendChild(img);

const imgExit = document.createElement('img');
imgExit.src = `${popup.img[1]}`;
imgExit.id = 'imgExit';
div.appendChild(imgExit);

const imgD1 = document.createElement('img');
imgD1.src = `${popup.img[2]}`;
imgD1.id = 'imgD1';
div.appendChild(imgD1);

const imgD = document.createElement('img');
imgD.src = `${popup.img[3]}`;
imgD.id = 'imgD';
div.appendChild(imgD);

const h1 = document.createElement('h1');
h1.textContent = `${popup.heading}`;
div.appendChild(h1);

const ul = document.createElement('ul');
div.appendChild(ul);

const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li');
  li.textContent = `${popup.technologies[i]}`;
  fragment.appendChild(li);
}
ul.appendChild(fragment);

const ul1 = document.createElement('ul');
ul1.id = 'secondUL';
div.appendChild(ul1);

const fragment1 = document.createDocumentFragment();
for (let j = 0; j < 6; j += 1) {
  const li1 = document.createElement('li');
  li1.textContent = `${popup.technologies1[j]}`;
  fragment1.appendChild(li1);
}
ul1.appendChild(fragment1);

const p = document.createElement('p');
p.textContent = `${popup.paragraph}`;
div.appendChild(p);

const subdiv = document.createElement('div');
subdiv.className = 'links';
div.appendChild(subdiv);

const aLiveversion = document.createElement('a');
aLiveversion.href = `${popup.liveversion[0]}`;
aLiveversion.textContent = `${popup.liveversion[1]}`;
subdiv.appendChild(aLiveversion);

const aSource = document.createElement('a');
aSource.href = `${popup.source[0]}`;
aSource.textContent = `${popup.source[1]}`;
subdiv.appendChild(aSource);

const img2 = document.createElement('img');
img2.src = `${popup.liveversion[2]}`;
aLiveversion.appendChild(img2);

const img1 = document.createElement('img');
img1.src = `${popup.source[2]}`;
aSource.appendChild(img1);

document.body.appendChild(div);

const pop = document.querySelector('.popup');
const x = window.matchMedia('(max-width: 768px)');
function openPopup() {
  if (x.matches) {
    pop.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
  }
}

const closeM = document.getElementById('imgExit');
function closePopup() {
  pop.classList.remove('open-popup');
  document.body.style.backgroundColor = 'white';
  document.getElementById('overlay').style.display = 'none';
}
closeM.addEventListener('click', closePopup);

/* popup window for Desktop-version */

const x1 = window.matchMedia('(min-width: 769px)');

function openPopupD() {
  if (x1.matches) {
    pop.classList.add('open-popupD');
    document.getElementById('overlay').style.display = 'block';
  }
}

const closeD = document.getElementById('imgD1');

function closePopupD() {
  pop.classList.remove('open-popupD');
  document.body.style.backgroundColor = 'white';
  document.getElementById('overlay').style.display = 'none';
}
closeD.addEventListener('click', closePopupD);

/* cards */

const cards = {
  heading: 'Multi-Post Stories Gain+Glory',
  technologies: [
    'Ruby on rails', 'css', 'JavScript', 'html'],
  link: ['#popup', 'See Project'],
};

const div1 = document.createElement('div');
div1.className = 'main-container';
div1.id = 'Tcontainer';

const fragmentDiv = document.createDocumentFragment();

for (let y = 0; y < 8; y += 1) {
  const divCards = document.createElement('div');
  divCards.className = 'container';
  const divCards1 = document.createElement('div');
  divCards1.className = 'sub-container';
  const h = document.createElement('h3');
  h.textContent = `${cards.heading}`;
  const ulCrad = document.createElement('ul');
  const fragmentLi = document.createDocumentFragment();
  for (let y = 0; y < 4; y += 1) {
    const liCard = document.createElement('li');
    liCard.textContent = `${cards.technologies[y]}`;
    fragmentLi.appendChild(liCard);
  }
  const aCard = document.createElement('a');
  aCard.href = `${cards.link[0]}`;
  aCard.textContent = `${cards.link[1]}`;
  aCard.id = 'seeProject';
  aCard.setAttribute('onclick', 'openPopupD(); openPopup();');

  fragmentDiv.appendChild(divCards);
  divCards.appendChild(divCards1);
  divCards1.appendChild(h);
  divCards1.appendChild(ulCrad);
  ulCrad.appendChild(fragmentLi);
  divCards1.appendChild(aCard);
}
div1.appendChild(fragmentDiv);

document.body.appendChild(div1);

const list = document.querySelector('#img10');
list.after(div1);
