import { projects } from "./projects.js";

const cardConteinier = document.getElementById("card-conteiner");
const projectCards = Array.from(cardConteinier.children);

const projectCardTemplate = projectCards[0];

const baseURL = './viewer.html';

for (let project of projects){
    const newCard = projectCardTemplate.cloneNode(true);

    const projectName = newCard.querySelector('h2');
    projectName.textContent = project.name;

    newCard.style.backgroundImage=project.picture;

    const projectBio = newCard.querySelector('p');
    projectBio.textContent = project.description;

    const projectURL = newCard.querySelector('a');    
    projectURL.href = baseURL + `?id=${project.id}`;


    cardConteinier.appendChild(newCard);
} 

projectCardTemplate.remove();