let container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
let row = document.createElement('div');
row.setAttribute('class','row');
container.appendChild(row);
//hero
let hero = document.createElement('div');
hero.setAttribute('class','hero container col-12');
hero.style.margin = '15px auto';
hero.style.width = '960px';
hero.style.height = '360px';
hero.style.backgroundColor = 'rgba(51,51,51)';
row.appendChild(hero);
//cards wrapper
let cards = document.createElement('div');
cards.setAttribute('class', 'cards-wrapper col-12');
cards.style.margin = '15px auto';
cards.style.padding = '0px';
cards.style.width = '960px'
cards.style.display = 'flex';
cards.style.justifyContent = 'space-between';
cards.style.alignItems = 'center';
row.appendChild(cards);
//cards
//#region card1
let card1 = document.createElement('div');
card1.setAttribute('class', 'col-4');
card1.padding = '10px';
card1.style.width = '290px';
//card1 img
let imgWrapper1 = document.createElement('div');
imgWrapper1.style.border = '1px solid grey';
imgWrapper1.style.padding = '5px';
imgWrapper1.style.width = '290px';
let img1 = document.createElement('img');
img1.style.width = '280px';
img1.style.height = '180px';
img1.style.backgroundColor = 'rgba(51,51,51)';
imgWrapper1.appendChild(img1);
card1.appendChild(imgWrapper1);
//card1 header
let heading1 = document.createElement('h1');
heading1.textContent = 'Lorem Ispum';
heading1.style.color = 'dark-grey';
heading1.style.fontSize = '16px';
heading1.style.fontStyle = 'Italic';
heading1.style.padding = '10px 0';
card1.appendChild(heading1);
//card1 descr
let paragraph1 = document.createElement('p');
paragraph1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, impedit.';
paragraph1.style.color = 'dark-grey';
paragraph1.style.fontSize = '14px';
card1.appendChild(paragraph1);
//card1 link
let link1 = document.createElement('a');
link1.setAttribute('href', 'http://www.google.com/');
link1.textContent = 'Read More >';
link1.style.color = 'orange';
link1.style.textDecoration = 'none';
link1.style.fontSize = '14px';
link1.style.float = 'right';
card1.appendChild(link1)
cards.appendChild(card1);
//#endregion
//#region card2
let card2 = document.createElement('div');
card2.setAttribute('class', 'col-4');
card2.padding = '10px';
card2.style.width = '290px';
//card2 img
let imgWrapper2 = document.createElement('div');
imgWrapper2.style.border = '1px solid grey';
imgWrapper2.style.padding = '5px';
imgWrapper2.style.width = '290px';
let img2 = document.createElement('img');
img2.style.width = '280px';
img2.style.height = '180px';
img2.style.backgroundColor = 'rgba(51,51,51)';
imgWrapper2.appendChild(img2);
card2.appendChild(imgWrapper2);
//card2 header
let heading2 = document.createElement('h1');
heading2.textContent = 'Lorem Ispum';
heading2.style.color = 'dark-grey';
heading2.style.fontSize = '16px';
heading2.style.fontStyle = 'Italic';
heading2.style.padding = '10px 0';
card2.appendChild(heading2);
//card2 descr
let paragraph2 = document.createElement('p');
paragraph2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, impedit.';
paragraph2.style.color = 'dark-grey';
paragraph2.style.fontSize = '14px';
card2.appendChild(paragraph2);
//card2 link
let link2 = document.createElement('a');
link2.setAttribute('href', 'http://www.google.com/');
link2.textContent = 'Read More >';
link2.style.color = 'orange';
link2.style.textDecoration = 'none';
link2.style.fontSize = '14px';
link2.style.float = 'right';
card2.appendChild(link2)
cards.appendChild(card2);
//#endregion
//#region card3
let card3 = document.createElement('div');
card3.setAttribute('class', 'col-4');
card3.padding = '10px';
card3.style.width = '290px';
//card3 img
let imgWrapper3 = document.createElement('div');
imgWrapper3.style.border = '1px solid grey';
imgWrapper3.style.padding = '5px';
imgWrapper3.style.width = '290px';
let img3 = document.createElement('img');
img3.style.width = '280px';
img3.style.height = '180px';
img3.style.backgroundColor = 'rgba(51,51,51)';
imgWrapper3.appendChild(img3);
card3.appendChild(imgWrapper3);
//card3 header
let heading3 = document.createElement('h1');
heading3.textContent = 'Lorem Ispum';
heading3.style.color = 'dark-grey';
heading3.style.fontSize = '16px';
heading3.style.fontStyle = 'Italic';
heading3.style.padding = '10px 0';
card3.appendChild(heading3);
//card3 descr
let paragraph3 = document.createElement('p');
paragraph3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, impedit.';
paragraph3.style.color = 'dark-grey';
paragraph3.style.fontSize = '14px';
card3.appendChild(paragraph3);
//card3 link
let link3 = document.createElement('a');
link3.setAttribute('href', 'http://www.google.com/');
link3.textContent = 'Read More >';
link3.style.color = 'orange';
link3.style.textDecoration = 'none';
link3.style.fontSize = '14px';
link3.style.float = 'right';
card3.appendChild(link3)
cards.appendChild(card3);
//#endregion