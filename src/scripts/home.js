import '../styles/home.css';
import '../styles/utilities.css';
import * as utilities from './utilities.js';
import * as index from './index.js';
export { render };

/*MAIN CONTENT*/

const headCont = utilities.createEl('div', ['h-flex', 'headCont'], false, 'heading-cont');
const h1 = utilities.createEl('h1', [], 'Our History', 'home-h1');
const headingImg = utilities.createEl('img', [], false, 'headingImg-home');

headingImg.src = '../img/our-history.jpg'

headCont.appendChild(h1);
headCont.appendChild(headingImg);


const infoCont = utilities.createEl('div', ['v-center-flex']);
const whoP = utilities.createEl('p', [], 'We, The Menu, were founded in 2023 by a group of friends who were passionate about food, sustainability, and social justice. We wanted to create a restaurant that would be good for the planet and for the people who ate there.');
const whereP = utilities.createEl('p', [], 'We are located on a small farm in the countryside. We grow our own vegetables, raise our own chickens, and use solar power to generate electricity. We also compost all of our food waste.');
const goesP = utilities.createEl('p', [], 'A portion of the proceeds from every meal sold at The Menu goes to a local food bank. We have helped to feed thousands of hungry people since we opened our doors.');
const proudP = utilities.createEl('p', [], 'We are proud of our history and our mission. We are committed to continuing to serve our community and to making a positive impact on the planet.');

infoCont.appendChild(whoP);
infoCont.appendChild(whereP);
infoCont.appendChild(goesP);
infoCont.appendChild(proudP);

/*MAIN CONTENT*/

/*SUB CONTENT*/

const charityCont = utilities.createEl('div', [], false, 'charity-cont');
const h2Charity = utilities.createEl('h2', [], 'Charity', 'charity-h2');
const pCharity = utilities.createEl('p', [], false, 'charity-p');

// as the text is long i prefered to not use the correspondent argument in .createEl for text, instead
// i decided to assign its text apart from .createEl;
pCharity.textContent = 'The Menu is committed to giving back to our community. We donate food to local food banks and shelters, and we host fundraising events for charities that support important causes. We also encourage our customers to volunteer their time or services to help those in need. We believe that everyone has a responsibility to give back, and we are proud to do our part';


charityCont.appendChild(h2Charity);
charityCont.appendChild(pCharity);

const sustainableCont = utilities.createEl('div', [], false, 'sustainable-cont');
const h2Sustainable = utilities.createEl('h2', [], 'Self-sustainable', 'sustainable-h2');
const pSustainable = utilities.createEl('p', [], false, 'sustainable-p');

pSustainable.textContent = 'The Menu is committed to sustainability. We believe that it is important to reduce our impact on the environment, and we are taking steps to do so.We grow our own food in our garden, which reduces our reliance on imported produce. We also use renewable energy sources, such as solar power, to power our restaurant.We are also working to reduce our waste. We compost food scraps and recycle paper, plastic, and glass. We also use biodegradable utensils and straws. We believe that sustainability is important for the future of our planet, and we are committed to doing our part.';

sustainableCont.appendChild(h2Sustainable);
sustainableCont.appendChild(pSustainable);




/*SUB CONTENT*/

/* RENDER FUNCTION: All elements are already created,
					we just have to append it to each corresponding
					cont
*/

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(headCont);
	index.mainCont.appendChild(infoCont);
	// SUB CONTENT
	index.subCont.appendChild(charityCont);
	index.subCont.appendChild(sustainableCont);

	return
}

/*RENDER FUNCTION*/