import loadLanding from "./loadLanding";
import loadContacts from "./loadContacts";
import loadMenu from "./loadMenu";

const clearPage = () => {
    const content = document.querySelector('#content');
    const elements = content.children;
    Array.from(elements).forEach(element => {
        if (element.getAttribute('id') != 'navbar') element.remove();
    })
}



const navBar = document.createElement('div');
navBar.setAttribute('id', 'navbar');
const content = document.querySelector('#content');
content.appendChild(navBar);

const landingBtn = document.createElement('btn');
const menuBtn = document.createElement('btn');
const contactBtn = document.createElement('btn');

landingBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact Us';

landingBtn.addEventListener('click', () => {
    clearPage();
    loadLanding();
})

menuBtn.addEventListener('click', () => {
    clearPage();
    loadMenu();
});

contactBtn.addEventListener('click', () => {
    clearPage();
    loadContacts();
})


navBar.appendChild(landingBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

createLanding();