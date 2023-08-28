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

const spanRisotto = utilities.createEl('span', [], 'Risotto', 'span-risotto');

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

const spanPasta = utilities.createEl('span', [], 'Pasta', 'span-pasta');

pastaOpt.appendChild(spanPasta);

pastaWrapper.appendChild(pastaOpt);
// PASTA

// MEATS
// MEATS

// BIRDS
// BIRDS

// DESSERTS
// DESSERTS


const typesOfDishes = dishesCont.children;

// Appending all dishes wrapper;
	// todo: use a loop for it.
dishesCont.appendChild(risottoWrapper);
dishesCont.appendChild(pastaWrapper);

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

	if(e.target.id == 'h2-risotto'){
		wrapper = e.target.parentElement.parentElement;
		titleOpt = e.target.parentElement.parentElement.children[0];
		foldCont = wrapper.children[1];

		titleOpt.classList.toggle('type-selected');
		foldCont.classList.toggle('type-unfold');
	}

	if(e.target.id == 'risotto-opt'){
		wrapper = e.target.parentElement;
		titleOpt = e.target.parentElement.children[0];
		foldCont = wrapper.children[1];

		titleOpt.classList.toggle('type-selected');
		foldCont.classList.toggle('type-unfold');
	}
}

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(dishesCont);
	index.mainCont.appendChild(ingredientsCont);
	// SUB CONTENT
}