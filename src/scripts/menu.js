import '../styles/menu.css';
import '../styles/utilities.css';
import * as utilities from './utilities.js';
import * as index from './index.js';
export { render };

const dishesCont = utilities.createEl('div', ['dishes-cont', 'v-center-flex'], false, 'dishes-cont');
const ingredientsCont = utilities.createEl('div', ['ingredients-cont', 'center-h-flex'], false, 'ingredients-cont');

// ** INGREDIENTS CONT
const pIngredients = utilities.createEl('p', [], 'Click any dish to see its ingredients!', 'pIngredients');

ingredientsCont.appendChild(pIngredients);

// ** DISHESCONT
// RISOTTO
const risottoWrapper = utilities.createEl('div', ['type-wrapper', 'v-center-flex'], false, 'risotto-wrapper');
const risottoOpt = utilities.createEl('div', ['type-title', 'center-h-flex'], false, 'risotto-opt');
const risottoFold = utilities.createEl('div', ['type-fold', 'center-v-flex'], false, 'risotto-fold');

const spanRisotto = utilities.createEl('span', ['title-text'], 'Risotto', 'risotto-span');

risottoOpt.appendChild(spanRisotto);

/*risottoFold Content*/
const rDishOne = utilities.createEl('span', ['dish-type'], 'Mushroom risotto', 'r1-risotto');
const rDishTwo = utilities.createEl('span', ['dish-type'], 'Risotto alla Milanese', 'r2-risotto');
const rDishThree = utilities.createEl('span', ['dish-type'], 'Seafood risotto', 'r3-risotto');

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
const pDishOne = utilities.createEl('span', ['dish-type'], 'Spaghetti Carbonara', 'p1-pasta');
const pDishTwo = utilities.createEl('span', ['dish-type'], 'Fettuccine Alfredo:', 'p2-pasta');
const pDishThree = utilities.createEl('span', ['dish-type'], 'Lasagna', 'p3-pasta');

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
const mDishOne = utilities.createEl('span', ['dish-type'], 'Beef Bourguignon', 'm1-meats');
const mDishTwo = utilities.createEl('span', ['dish-type'], 'Pork Chops with Applesauce', 'm2-meats');
const mDishThree = utilities.createEl('span', ['dish-type'], 'Steak', 'm3-meats');

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
const bDishOne = utilities.createEl('span', ['dish-type'], 'Roast chicken', 'b1-birds');
const bDishTwo = utilities.createEl('span', ['dish-type'], 'Duck confit', 'b2-birds');
const bDishThree = utilities.createEl('span', ['dish-type'], 'Quail a la royale', 'b3-birds');

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
const dDishOne = utilities.createEl('span', ['dish-type'], 'Tiramisu', 'd1-desserts');
const dDishTwo = utilities.createEl('span', ['dish-type'], 'Chocolate lava cake', 'd2-desserts');
const dDishThree = utilities.createEl('span', ['dish-type'], 'Apple pie', 'd3-desserts');

dessertsFold.appendChild(dDishOne);
dessertsFold.appendChild(dDishTwo);
dessertsFold.appendChild(dDishThree);


dessertsWrapper.appendChild(dessertsOpt);
dessertsWrapper.appendChild(dessertsFold)
// DESSERTS


const typesOfDishes = dishesCont.children;

// Appending all dishes wrapper;
dishesCont.appendChild(risottoWrapper);
dishesCont.appendChild(pastaWrapper);
dishesCont.appendChild(meatsWrapper);
dishesCont.appendChild(birdsWrapper);
dishesCont.appendChild(dessertsWrapper);

// adding eventListener for each dish (plate)
const allDishes = dishesCont.getElementsByClassName('dish-type');
const dishesObj = {
	risotto: {
		r1: {
			name: 'Mushroom risotto',
			ingredients: 'mushrooms, olive oil, onion, garlic, arborio rice, white wine, chicken broth, parmesan cheese, parsley, salt, pepper.',
			selected: false,
		},
		r2: {
			name: 'Risotto alla Milanese',
			ingredients: 'chicken stock, olive oil, onion, salt, pepper, arborio rice, saffron threads, white wine, parmigiano-reggiano cheese, butter, parsley',
			selected: false,
		},
		r3: {
			name: 'Seafood risotto',
			ingredients: 'seafood, arborio rice, white wine, chicken/seafood stock, butter, onion, garlic, parmesan cheese, parsley, salt, pepper',
			selected: false,
		},
	},

	pasta: {
		p1: {
			name: 'Spaghetti Carbonara',
			ingredients: 'spaghetti, guanciale/pancetta, eggs, pecorino romano/parmesan cheese, black pepper',
			selected: false,
		},
		p2: {
			name: 'Fettuccine Alfredo',
			ingredients: 'fettuccine, butter, parmesan cheese, heavy cream, salt, pepper',
			selected: false,
		},
		p3: {
			name: 'Lasagna',
			ingredients: 'pasta, tomato sauce, ricotta cheese, mozzarella cheese, parmesan cheese',
			selected: false,
		},
	},

	meats: {
		m1: {
			name: 'Beef Bourguignon',
			ingredients: 'beef, red wine, onions, carrots, mushrooms, garlic, tomato paste, beef stock, thyme, bay leaves, salt, pepper',
			selected: false,
		},
		m2: {
			name: 'Pork Chops with Applesauce',
			ingredients: 'pork chops, applesauce, butter, brown sugar, cinnamon, salt, pepper',
			selected: false,
		},
		m3: {
			name: 'Steak',
			ingredients: 'steak, salt, pepper, oil',
			selected: false,
		},
	},

	birds: {
		b1: {
			name: 'Roast chicken',
			ingredients: 'chicken, salt, pepper, herbs',
			selected: false,
		},
		b2: {
			name: 'Duck confit',
			ingredients: 'duck legs, duck fat, salt, pepper, herbs',
			selected: false,
		},
		b3: {
			name: 'Quail a la royale',
			ingredients: 'quail, mushrooms, foie gras, wine, cream, truffles',
			selected: false,
		},
	},

	desserts: {
		d1: {
			name: 'Tiramisu',
			ingredients: 'coffee, mascarpone cheese, sugar, cocoa powder',
			selected: false,
		},
		d2: {
			name: 'Chocolate lava cake',
			ingredients: 'unsalted butter, chocolate, eggs, sugar, flour',
			selected: false,
		},
		d3: {
			name: 'Apple pie',
			ingredients: 'apples, sugar, flour, butter, spices, crust',
			selected: false,
		},
	},
}

for(let i = 0; i < allDishes.length; i++){
	let dish = allDishes[i];
	if(dish){
		dish.addEventListener('click', dishHandler);
	}
}


// adding eventListener to all type of dishes opt.
for(let i = 0; i <= typesOfDishes.length; i++){
	let opt = typesOfDishes[i];
	if(opt){
		opt.children[0].addEventListener('click', typeDishHandler);
	}

}



function typeDishHandler(e){
	let foldCont;
	let wrapper;
	let titleOpt;

	// unfold folded dishes
	if(e.target.classList.contains('title-text')){
		wrapper = e.target.parentElement.parentElement;
		titleOpt = e.target.parentElement.parentElement.children[0];
		foldCont = wrapper.children[1];
	}

	if(e.target.classList.contains('type-title')){
		wrapper = e.target.parentElement;
		titleOpt = e.target.parentElement.children[0];
		foldCont = wrapper.children[1];
	}

	// remove unfold class from all type of dish excep e.target
	for(let i = 0; i < dishesCont.children.length; i++){
		if(dishesCont.children[i].children[0] !== titleOpt){
			if(dishesCont.children[i].children[0].classList.contains('type-selected')){
				dishesCont.children[i].children[0].classList.toggle('type-selected');
				dishesCont.children[i].children[1].classList.toggle('type-unfold');
			}
		}

		else {
			titleOpt.classList.toggle('type-selected');
			foldCont.classList.toggle('type-unfold');
		}
	}
}

function dishHandler(e){
	let dishN;
	let typeDish;
	// unselect all other that are not e.target and assign
	// corresponding class to selected one.
	for(let i = 0; i < allDishes.length; i++){
		if(allDishes[i] == e.target){
			allDishes[i].classList.add('dish-type-selected');

			dishN = allDishes[i].id.match(/\w+(?=-)/)[0];
			typeDish = allDishes[i].id.match(/(?<=-)\w+/)[0];

			dishesObj[typeDish][dishN]['selected'] = true;

			// display ingredients of corresponding dish ingredients
			pIngredients.textContent = dishesObj[typeDish][dishN]['ingredients']
		} else {
			allDishes[i].classList.remove('dish-type-selected');

			dishN = allDishes[i].id.match(/\w+(?=-)/)[0];
			typeDish = allDishes[i].id.match(/(?<=-)\w+/)[0];

			dishesObj[typeDish][dishN]['selected'] = false;
		}
	}
}

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(dishesCont);
	index.mainCont.appendChild(ingredientsCont);
	// SUB CONTENT
}