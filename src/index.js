import createLanding from "./createLanding";

const clearPage = () => {
    const content = document.querySelector('#content');
    let elements = content.children;

    //get all children and remove them. But not the buttons or their navbar div
}



const navBar = document.createElement('div');
navBar.setAttribute('id', 'navbar');
const content = document.querySelector('#content');
content.appendChild(navBar);



createLanding();