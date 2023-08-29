import '../styles/menu.css';
import '../styles/utilities.css';
import * as utilities from './utilities.js';
import * as index from './index.js';
export { render };

const dishesCont = utilities.createEl('div', ['dishes-cont', 'v-center-flex'], false, 'dishes-cont');
const ingredientsCont = utilities.createEl('div', ['ingredients-cont'], false, 'ingredients-cont');

// RISOTTO
const risottoWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'risotto-wrapper');
const risottoOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'risotto-opt');
const risottoFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'risotto-fold');

const spanRisotto = utilities.createEl('span', ['title-text'], 'Risotto', 'risotto-span');

risottoOpt.appendChild(spanRisotto);

/*risottoFold Content*/
const rDishOne = utilities.createEl('span', ['dish-type'], 'Mushroom risotto');
const rDishTwo = utilities.createEl('span', ['dish-type'], 'Risotto alla Milanese');
const rDishThree = utilities.createEl('span', ['dish-type'], 'Seafood risotto');

risottoFold.appendChild(rDishOne);
risottoFold.appendChild(rDishTwo);
risottoFold.appendChild(rDishThree);

risottoWrapper.appendChild(risottoOpt);
risottoWrapper.appendChild(risottoFold);
// RISOTTO

// PASTA
const pastaWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'pasta-wrapper');
const pastaOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'pasta-opt');
const pastaFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'pasta-fold');

const spanPasta = utilities.createEl('span', ['title-text'], 'Pasta', 'pasta-span');

pastaOpt.appendChild(spanPasta);

/*pastaFold Content*/
const pDishOne = utilities.createEl('span', ['dish-type'], 'Spaghetti Carbonara');
const pDishTwo = utilities.createEl('span', ['dish-type'], 'Fettuccine Alfredo:');
const pDishThree = utilities.createEl('span', ['dish-type'], 'Lasagna');

pastaFold.appendChild(pDishOne);
pastaFold.appendChild(pDishTwo);
pastaFold.appendChild(pDishThree);

pastaWrapper.appendChild(pastaOpt);
pastaWrapper.appendChild(pastaFold);
// PASTA

// MEATS
const meatsWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'meats-wrapper');
const meatsOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'meats-opt');
const meatsFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'meats-fold');

const spanMeats = utilities.createEl('span', ['title-text'], 'Meats', 'meats-span');

meatsOpt.appendChild(spanMeats);

/*meatsFold Content*/
const mDishOne = utilities.createEl('span', ['dish-type'], 'Beef Bourguignon');
const mDishTwo = utilities.createEl('span', ['dish-type'], 'Pork Chops with Applesauce');
const mDishThree = utilities.createEl('span', ['dish-type'], 'Steak');

meatsFold.appendChild(mDishOne);
meatsFold.appendChild(mDishTwo);
meatsFold.appendChild(mDishThree);

meatsWrapper.appendChild(meatsOpt);
meatsWrapper.appendChild(meatsFold);
// MEATS

// BIRDS
const birdsWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'birds-wrapper');
const birdsOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'birds-opt');
const birdsFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'birds-fold');

const spanBirds = utilities.createEl('span', ['title-text'], 'Birds', 'birds-span');

birdsOpt.appendChild(spanBirds);

/*birdsFold Content*/
const bDishOne = utilities.createEl('span', ['dish-type'], 'Roast chicken');
const bDishTwo = utilities.createEl('span', ['dish-type'], 'Duck confit');
const bDishThree = utilities.createEl('span', ['dish-type'], 'Quail a la royale');

birdsFold.appendChild(bDishOne);
birdsFold.appendChild(bDishTwo);
birdsFold.appendChild(bDishThree);

birdsWrapper.appendChild(birdsOpt);
birdsWrapper.appendChild(birdsFold);
// Birds

// DESSERTS
const dessertsWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'desserts-wrapper');
const dessertsOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'desserts-opt');
const dessertsFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'desserts-fold');

const spanDesserts = utilities.createEl('span', ['title-text'], 'Desserts', 'desserts-span');

dessertsOpt.appendChild(spanDesserts);

/*dessertsFold Content*/
const dDishOne = utilities.createEl('span', ['dish-type'], 'Tiramisu');
const dDishTwo = utilities.createEl('span', ['dish-type'], 'Chocolate lava cake');
const dDishThree = utilities.createEl('span', ['dish-type'], 'Apple pie');

dessertsFold.appendChild(dDishOne);
dessertsFold.appendChild(dDishTwo);
dessertsFold.appendChild(dDishThree);


dessertsWrapper.appendChild(dessertsOpt);
dessertsWrapper.appendChild(dessertsFold)
// DESSERTS


const typesOfDishes = dishesCont.children;

// Appending all dishes wrapper;
	// todo: use a loop for it.
dishesCont.appendChild(risottoWrapper);
dishesCont.appendChild(pastaWrapper);
dishesCont.appendChild(meatsWrapper);
dishesCont.appendChild(birdsWrapper);
dishesCont.appendChild(dessertsWrapper);

// adding eventListener to all type of dishes opt.
for(let i = 0; i <= typesOfDishes.length; i++){
	let opt = typesOfDishes[i];
	if(opt){
		opt.children[0].addEventListener('click', typeDishHandler);
	}

}


// go for the fold container
function typeDishHandler(e){
	let foldCont;
	let wrapper;
	let titleOpt;

	if(e.target.classList.contains('title-text')){
		wrapper = e.target.parentElement.parentElement;
		titleOpt = e.target.parentElement.parentElement.children[0];
		foldCont = wrapper.children[1];

		titleOpt.classList.toggle('type-selected');
		foldCont.classList.toggle('type-unfold');
		console.log('MAD');
	}

	if(e.target.classList.contains('type-title')){
		wrapper = e.target.parentElement;
		titleOpt = e.target.parentElement.children[0];
		foldCont = wrapper.children[1];

		titleOpt.classList.toggle('type-selected');
		foldCont.classList.toggle('type-unfold');
		console.log('WORLD');
	}
}

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(dishesCont);
	index.mainCont.appendChild(ingredientsCont);
	// SUB CONTENT
}