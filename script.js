
const container = document.querySelector('.container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red";
redParagraph.style.color = 'red';

const blueHeading = document.createElement('h3');
blueHeading.textContent = "I'm blue h3";
blueHeading.style.color = 'blue';

const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.border = '1px solid black';
blackPinkDiv.style.backgroundColor = 'pink';

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";

const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";

blackPinkDiv.appendChild(h1InDiv);
blackPinkDiv.appendChild(pInDiv);

container.appendChild(redParagraph);
container.appendChild(blueHeading);
container.appendChild(blackPinkDiv);