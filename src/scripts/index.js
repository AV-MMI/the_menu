import '../styles/styles.css';
import '../styles/utilities.css';
import * as home from './home.js';
import * as utilities from './utilities.js';

export { mainCont, subCont };

const content = document.getElementById('content');
content.classList.add('vcenter-flex');


/**-HEADING CONT-**/	// (element, cssClass, innerText, id
const headingCont = utilities.createEl('div', ['headingCont', 'h-flex']);
const mainHeading = utilities.createEl('h1', ['main-heading'], 'The Menu');

const menuCont = utilities.createEl('ul', ['menu-cont', 'h-flex', 'test']);
const homePage = utilities.createEl('li', ['menu-opt'], 'home', 'homeLi');
const menuPage = utilities.createEl('li', ['menu-opt'], 'menu', 'menuLi');
const contactPage = utilities.createEl('li', ['menu-opt'], 'contact', 'contactLi');

headingCont.appendChild(mainHeading);
headingCont.appendChild(menuCont);

menuCont.appendChild(homePage);
menuCont.appendChild(menuPage);
menuCont.appendChild(contactPage);


/**-HEADING CONT-**/
const tabDisplay = utilities.createEl('div', ['tab-display'], false, 'tabDisplay');
const mainCont = utilities.createEl('div', ['half-cont'], false, 'mainCont');
const subCont = utilities.createEl('div', ['half-cont'], false, 'subCont');

mainCont.classList.add('v-center-flex');
subCont.classList.add('v-gap-flex');


tabDisplay.appendChild(mainCont);
tabDisplay.appendChild(subCont);


// tab behavior
const menuOpts = menuCont.children;

for(let i = 0; i < menuOpts.length; i++){
	menuOpts.item(i).addEventListener('click', optsHandler)
}


function optsHandler(e){

	//assign selected class
	e.target.classList.add('menu-opt-selected');

	//wipe out current content - TODO


	//display correspondent content
	if(e.target.id == 'homeLi'){
		cleanDisplay();
		home.render();
	}
	else if(e.target.id == 'menuLi'){
		cleanDisplay();
		console.log(e.target.id)
	}
	else if(e.target.id == 'contactLi'){
		cleanDisplay();
		console.log(e.target.id)
	}

	//remove selected class from the previous option clicked
	for(let i = 0; i < menuOpts.length; i++){
		if(menuOpts.item(i) !== e.target
			&& menuOpts.item(i).classList.contains('menu-opt-selected')){
			menuOpts.item(i).classList.remove('menu-opt-selected');
		}
	}
}


// content div
content.appendChild(headingCont);
content.appendChild(tabDisplay);

/*render last tab visited*/
function renderLastTab(){
	if(utilities.tabs.home){
		home.render();
		homePage.classList.add('menu-opt-selected');
	}

	else if(utilities.tabs.menu){
		// render
		menuPage.classList.add('menu-opt-selected');

	}

	else if(utilities.tabs.contact){
		// render
		contactPage.classList.add('menu-opt-selected');
	}
}

// remove all current content from the tabs display
function cleanDisplay(){
	// remove all elements from the mainCont part of the tabDisplay
	do {
		let tempo = mainCont.children[0];
		if(tempo){
			tempo.remove();
		}
	} while(mainCont.children.length > 0)


	// remove all elements from the subCont part of the tabDisplay
	do {
		let tempo = subCont.children[0];
		if(tempo){
			tempo.remove();
		}
	} while(subCont.children.length > 0)

	return
};


renderLastTab();


/**TO DO
[X]- Add a page menu
[X]- import/export with utilities.js
[o]- Different layouts for each page
[]
**/
