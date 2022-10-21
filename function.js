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
  name: 'popup',
  img: ['images/SnapshootPortfolio.svg', 'images/Icon-Cancel-pop.svg', 'images/Disable-pop.svg', 'images/SnapshootPortfolio1.png'],
  imgId: ['imgs', 'imgExit', 'imgx', 'imgsd'],
  heading: 'Keeping track of hundreds of components',
  technologies: ['Ruby on rails', 'css', 'JavScript'],
  technologies1: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveversion: ['#', 'See Live', 'images/Icon-Export.svg'],
  source: ['#', 'See Source', 'images/Icon-GitHub.svg'],
};

const popup1 = {
  name: 'popup1',
  img: ['images/SnapshootPortfolioP1.png', 'images/Icon-Cancel-pop.svg', 'images/Disable-pop.svg', 'images/SnapshootPortfolioP1d.png'],
  imgId: ['imgs', 'imgExit1', 'imgx1', 'imgsd'],
  heading: 'Tonic',
  technologies: ['Ruby on rails', 'css', 'JavScript'],
  technologies1: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveversion: ['#', 'See Live', 'images/Icon-Export.svg'],
  source: ['#', 'See Source', 'images/Icon-GitHub.svg'],
};

const popup2 = {
  name: 'popup2',
  img: ['images/SnapshootPortfolio2.png', 'images/Icon-Cancel-pop.svg', 'images/Disable-pop.svg', 'images/SnapshootPortfolioD2.png'],
  imgId: ['imgs', 'imgExit2', 'imgx2', 'imgsd'],
  heading: 'Profesional Art Printing Data',
  technologies: ['Ruby on rails', 'css', 'JavScript'],
  technologies1: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveversion: ['#', 'See Live', 'images/Icon-Export.svg'],
  source: ['#', 'See Source', 'images/Icon-GitHub.svg'],
};

const popup3 = {
  name: 'popup3',
  img: ['images/SnapshootPortfolio3.png', 'images/Icon-Cancel-pop.svg', 'images/Disable-pop.svg', 'images/SnapshootPortfolioD3.png'],
  imgId: ['imgs', 'imgExit3', 'imgx3', 'imgsd'],
  heading: 'Multi - Post stories',
  technologies: ['Ruby on rails', 'css', 'JavScript'],
  technologies1: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveversion: ['#', 'See Live', 'images/Icon-Export.svg'],
  source: ['#', 'See Source', 'images/Icon-GitHub.svg'],
};

const array = [popup, popup1, popup2, popup3];

for (let i = 0; i < 4; i += 1) {
  const div = document.createElement('div');
  div.className = `${array[i].name}`;
  div.id = `${array[i].name}`;

  for (let y = 0; y < 4; y += 1) {
    const img = document.createElement('img');
    img.src = `${array[i].img[y]}`;
    img.id = `${array[i].imgId[y]}`;
    div.appendChild(img);
  }

  const h1 = document.createElement('h1');
  h1.textContent = `${array[i].heading}`;
  div.appendChild(h1);

  const ul = document.createElement('ul');
  div.appendChild(ul);

  const fragment = document.createDocumentFragment();
  for (let j = 0; j < 3; j += 1) {
    const li = document.createElement('li');
    li.textContent = `${array[i].technologies[j]}`;
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);

  const ul1 = document.createElement('ul');
  ul1.id = 'secondUL';
  div.appendChild(ul1);

  const fragment1 = document.createDocumentFragment();
  for (let j = 0; j < 6; j += 1) {
    const li1 = document.createElement('li');
    li1.textContent = `${array[i].technologies1[j]}`;
    fragment1.appendChild(li1);
  }
  ul1.appendChild(fragment1);

  const p = document.createElement('p');
  p.textContent = `${array[i].paragraph}`;
  div.appendChild(p);

  const subdiv = document.createElement('div');
  subdiv.className = 'links';
  div.appendChild(subdiv);

  const aLiveversion = document.createElement('a');
  aLiveversion.href = `${array[i].liveversion[0]}`;
  aLiveversion.textContent = `${array[i].liveversion[1]}`;
  subdiv.appendChild(aLiveversion);

  const aSource = document.createElement('a');
  aSource.href = `${array[i].source[0]}`;
  aSource.textContent = `${array[i].source[1]}`;
  subdiv.appendChild(aSource);

  const img2 = document.createElement('img');
  img2.src = `${array[i].liveversion[2]}`;
  aLiveversion.appendChild(img2);

  const img1 = document.createElement('img');
  img1.src = `${array[i].source[2]}`;
  aSource.appendChild(img1);

  document.body.appendChild(div);
}

const pop = document.querySelector('.popup');
const pop1 = document.querySelector('.popup1');
const pop2 = document.querySelector('.popup2');
const pop3 = document.querySelector('.popup3');

const x = window.matchMedia('(max-width: 768px)');
function openPopup() {
  if (x.matches) {
    pop.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopup1() {
  if (x.matches) {
    pop1.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopup2() {
  if (x.matches) {
    pop2.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopup3() {
  if (x.matches) {
    pop3.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
  }
}

const closeM = document.getElementById('imgExit');
const closeM1 = document.getElementById('imgExit1');
const closeM2 = document.getElementById('imgExit2');
const closeM3 = document.getElementById('imgExit3');

function closePopup() {
  pop.classList.remove('open-popup');
  pop1.classList.remove('open-popup');
  pop2.classList.remove('open-popup');
  pop3.classList.remove('open-popup');
  document.body.style.backgroundColor = 'white';
  document.getElementById('overlay').style.display = 'none';
}
closeM.addEventListener('click', closePopup);
closeM1.addEventListener('click', closePopup);
closeM2.addEventListener('click', closePopup);
closeM3.addEventListener('click', closePopup);

/* popup window for Desktop-version */

const x1 = window.matchMedia('(min-width: 769px)');

function openPopupD() {
  if (x1.matches) {
    pop.classList.add('open-popupD');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopupD1() {
  if (x1.matches) {
    pop1.classList.add('open-popupD');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopupD2() {
  if (x1.matches) {
    pop2.classList.add('open-popupD');
    document.getElementById('overlay').style.display = 'block';
  }
}

function openPopupD3() {
  if (x1.matches) {
    pop3.classList.add('open-popupD');
    document.getElementById('overlay').style.display = 'block';
  }
}

const closeD = document.getElementById('imgx');
const closeD1 = document.getElementById('imgx1');
const closeD2 = document.getElementById('imgx2');
const closeD3 = document.getElementById('imgx3');

function closePopupD() {
  pop.classList.remove('open-popupD');
  pop1.classList.remove('open-popupD');
  pop2.classList.remove('open-popupD');
  pop3.classList.remove('open-popupD');
  document.body.style.backgroundColor = 'white';
  document.getElementById('overlay').style.display = 'none';
}
closeD.addEventListener('click', closePopupD);
closeD1.addEventListener('click', closePopupD);
closeD2.addEventListener('click', closePopupD);
closeD3.addEventListener('click', closePopupD);

/* cards */

const cards = {
  heading: ['Multi-Post Stories Gain+Glory', 'Multi - Post stories Tonic', 'Profesional Art Printing Data', 'Multi - Post stories'],
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
  link: ['#popup', '#popup1', '#popup2', '#popup3'],
  functions: ['openPopupD(); openPopup();', 'openPopupD1(); openPopup1();', 'openPopupD2(); openPopup2();', 'openPopupD3(); openPopup3();'],
};

const div1 = document.createElement('div');
div1.className = 'main-container';
div1.id = 'Tcontainer';

const fragmentDiv = document.createDocumentFragment();

for (let y = 0; y < 4; y += 1) {
  const divCards = document.createElement('div');
  divCards.className = 'container';
  const divCards1 = document.createElement('div');
  divCards1.className = 'sub-container';
  const h = document.createElement('h3');
  h.textContent = `${cards.heading[y]}`;
  const ulCrad = document.createElement('ul');
  const fragmentLi = document.createDocumentFragment();
  for (let y = 0; y < 4; y += 1) {
    const liCard = document.createElement('li');
    liCard.textContent = `${cards.technologies[y]}`;
    fragmentLi.appendChild(liCard);
  }
  const aCard = document.createElement('a');
  aCard.href = `${cards.link[y]}`;
  aCard.textContent = 'See Project';
  aCard.id = 'seeProject';
  aCard.setAttribute('onclick', cards.functions[y]);

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

/* form vaildation */

if (x.matches) {
  document.getElementById('First-Name').removeAttribute('required');
  document.getElementById('Last-Name').removeAttribute('required');
}
if (x1.matches) {
  document.getElementById('Full-name').removeAttribute('required');
}

const submitForm = document.querySelector('.form1');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailv').value.trim();
	    const megForError = document.querySelector('#error');
		  const Regx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+[?:\.a-z0-9-]*$/;

  if (Regx.test(email) === true) {
    submitForm.submit();
    submitForm.reset();
  } else {
    document.querySelector('#error').textContent = 'Check your email please, Your Email Should be LowerCase letter';
  }
});

/* local storage */

const firstName = document.getElementById('First-Name');
const lastName = document.getElementById('Last-Name');
const fullName = document.getElementById('Full-name');
const emailAdd = document.getElementById('emailv');
const paragraph = document.getElementById('text-area');
const formid = document.getElementById('forms');

formid.addEventListener('change', () => {
  const store = {
    firstname: document.getElementById('First-Name').value,
    lastname: document.getElementById('Last-Name').value,
    email: document.getElementById('emailv').value,
    fullname: document.getElementById('Full-name').value,
    message: document.getElementById('text-area').value,
  };

  localStorage.setItem('inputs', JSON.stringify(store));
});

const Data = localStorage.getItem('inputs');
const DataValue = JSON.parse(Data);
/* get the value of input aftre load the page */
window.addEventListener('load', () => {
  if (localStorage.getItem('inputs')) {
    firstName.value = DataValue.firstname;
    lastName.value = DataValue.lastname;
    fullName.value = DataValue.fullname;
    emailAdd.value = DataValue.email;
    paragraph.value = DataValue.message;
  }
});
