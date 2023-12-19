import { create, setParent } from "./domKit";

const loadLanding = () => {
    setParent('#content');

    create().image('./seedsCafe.jpg', 'Image showcasing the restaurant');
    create().text('h1', 'The Seeds Cafe!');
    create().text('p', 'Such an amazing place to spend your money!');
}

export default loadLanding;