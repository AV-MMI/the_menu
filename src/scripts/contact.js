import '../styles/contact.css';
import '../styles/utilities.css';
import * as utilities from './utilities.js';
import * as index from './index.js';
export { render };

// MAIN CONTENT ---START
const contactUsCont = utilities.createEl('div', ['v-center-flex', 'container'], false, 'contactUs');
const contactH2 = utilities.createEl('h2', [], 'Contact Us!', 'contactH2')
const emailCont = utilities.createEl('div', [], false, 'emailCont');
const emailSpan = utilities.createEl('span', ['span-bold'], 'Email: ', 'emailSpan');
const emailAddress = utilities.createEl('span', [], 'the_menu@restaurant.cook', 'emailAddress');
const phoneCont = utilities.createEl('div', [], false, 'phoneCont');
const phoneSpan = utilities.createEl('span', ['span-bold'], 'Phone: ', 'phoneSpan');
const phoneAddress = utilities.createEl('span', [], '(415) 273-9164', 'phoneAddress');

emailCont.appendChild(emailSpan);
emailCont.appendChild(emailAddress);

phoneCont.appendChild(phoneSpan);
phoneCont.appendChild(phoneAddress);


contactUsCont.appendChild(contactH2);
contactUsCont.appendChild(emailCont);
contactUsCont.appendChild(phoneCont);

const addressCont = utilities.createEl('div', ['v-center-flex', 'container'], false, 'addressCont');
const addressH2 = utilities.createEl('h2', [], 'Our Address:', 'addressH2');
const addressSpan = utilities.createEl('span', [], 'The Palm Court, 5th Avenue at 50th Street, New York, New York', 'addressSpan');

addressCont.appendChild(addressH2);
addressCont.appendChild(addressSpan);

// MAIN CONTENT ---END

// SUB CONTENT ---START
const imgCont = utilities.createEl('div', ['img-display'], false, 'imgDisplay');
const restaurantImg = utilities.createEl('img', [], false, 'restaurantImg');
restaurantImg.src = '../img/restaurant.webp';

imgCont.appendChild(restaurantImg);
// SUB CONTENT ---END

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(contactUsCont);
	index.mainCont.appendChild(addressCont);

	index.mainCont.classList.add('v-flex');
	index.mainCont.classList.remove('v-center-flex');
	// SUB CONTENT
	index.subCont.appendChild(imgCont);
}