let parent;

export const setParent = (domElementString) => {
    parent = document.querySelector(domElementString);
}

export const create = (() => {

    const btn = (textContent, onClickFunction) => {
        const btn = document.createElement('btn');
        btn.textContent = textContent;
        btn.addEventListener('click', onClickFunction);
        parent.appendChild(btn);
    }

    const image = (src, alt) => {
        const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
        parent.appendChild(img);
    }

    const text = (textElement, textContent) => {
        const element = document.createElement(textElement);
        element.textContent = textContent;
        parent.appendChild(element);
    }

    return {image, text, btn};
});