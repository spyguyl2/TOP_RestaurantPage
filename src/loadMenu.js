const createMenuItem = (name, price, imgUrl) => {
    const menuItem = document.createElement('div');
    const namePriceBlock = document.createElement('div');
    menuItem.classList.toggle('menuItem');
    namePriceBlock.classList.toggle('namePriceBlock');

    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    const itemImg = document.createElement('img');

    itemName.textContent = name;
    itemPrice.textContent = price;
    itemImg.setAttribute('src', imgUrl);

    namePriceBlock.appendChild(itemName);
    namePriceBlock.appendChild(itemPrice);
    menuItem.appendChild(itemImg);
    menuItem.appendChild(namePriceBlock);

    return menuItem;
}


const loadMenu = () => {
    const content = document.querySelector('#content');
    const item1 = createMenuItem('Pancakes', '$49.99', './pancakes.jpg');
    const item2 = createMenuItem('Potatoes', 'Free', './potatoes.jpg');

    content.appendChild(item1);
    content.appendChild(item2);
}

export default loadMenu;