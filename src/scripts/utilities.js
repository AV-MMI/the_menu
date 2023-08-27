import * as index from './index.js';
export { createEl, tabs };

function createEl(element, cssClass, innerText, id){
	const newEl = document.createElement(element);
	//asigning css class/Classes
	if(cssClass && cssClass.length > 0){
		if(Array.isArray(cssClass)){ // an array was passed
			for(let i = 0; i < cssClass.length; i++){
				newEl.classList.add(cssClass[i]);
			}
		}

		else { //a string was passed
			newEl.classList.add(cssClass);
		}
	}

	//assigning text if passed
	if(innerText){
		newEl.textContent = innerText
	}

	//assigning id
	if(id){
		newEl.setAttribute('id', id);
	}

	return newEl;
}

// keeps track of the current tab/last one visited
const tabs = {
	home: true,
	menu: true,
	contact: false,
};