const createContact = (name, tel, imgUrl) => {
    const contactBlock = document.createElement('div');
    contactBlock.classList.toggle('contactBlock');
    
    const nameTelBlock = document.createElement('div');
    nameTelBlock.classList.toggle('nameTelBlock');

    const nameSection = document.createElement('p');
    nameSection.textContent = name;
    
    const telSection = document.createElement('p');
    telSection.textContent = tel;

    nameTelBlock.appendChild(nameSection);
    nameTelBlock.appendChild(telSection);

    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);

    contactBlock.appendChild(img);
    contactBlock.appendChild(nameTelBlock);
    return contactBlock;
}

const loadContacts = () => {
    const content = document.querySelector('#content');
    const contact1 = createContact('Bob', '561-420-6969', './randoGuy.jpg');
    const contact2 = createContact('Laura', '420-561-6969', './lady.png');
    const contact3 = createContact('Debbie', '696-942-0561', './pleaser.jpeg');
    
    content.appendChild(contact1);
    content.appendChild(contact2);
    content.appendChild(contact3);
}

export default loadContacts;