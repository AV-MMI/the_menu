"use strict";
(self["webpackChunkthe_menu"] = self["webpackChunkthe_menu"] || []).push([["utilities"],{

/***/ "./src/scripts/utilities.js":
/*!**********************************!*\
  !*** ./src/scripts/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEl: () => (/* binding */ createEl),
/* harmony export */   renderBaseLayout: () => (/* binding */ renderBaseLayout),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });


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

// creates and appends the two columns base layout to parentEl
function renderBaseLayout(parentEl){

	const leftHalf = createEl('div', ['half-cont'], false, 'leftHalf');
	const rightHalf = createEl('div', ['half-cont'], false, 'rightHalf');

	parentEl.appendChild(leftHalf);
	parentEl.appendChild(rightHalf);

	return;
}


// keeps track of the current tab/last one visited
const tabs = {
	home: true,
	menu: false,
	contact: false
};

// remove all current content from the tabs displa
function cleanDisplay(){

	return
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/utilities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9zcmMvc2NyaXB0cy91dGlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgY3JlYXRlRWwsIHJlbmRlckJhc2VMYXlvdXQsIHRhYnN9O1xuXG5mdW5jdGlvbiBjcmVhdGVFbChlbGVtZW50LCBjc3NDbGFzcywgaW5uZXJUZXh0LCBpZCl7XG5cdGNvbnN0IG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcblx0Ly9hc2lnbmluZyBjc3MgY2xhc3MvQ2xhc3Nlc1xuXHRpZihjc3NDbGFzcyAmJiBjc3NDbGFzcy5sZW5ndGggPiAwKXtcblx0XHRpZihBcnJheS5pc0FycmF5KGNzc0NsYXNzKSl7IC8vIGFuIGFycmF5IHdhcyBwYXNzZWRcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjc3NDbGFzcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdG5ld0VsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3NbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVsc2UgeyAvL2Egc3RyaW5nIHdhcyBwYXNzZWRcblx0XHRcdG5ld0VsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG5cdC8vYXNzaWduaW5nIHRleHQgaWYgcGFzc2VkXG5cdGlmKGlubmVyVGV4dCl7XG5cdFx0bmV3RWwudGV4dENvbnRlbnQgPSBpbm5lclRleHRcblx0fVxuXG5cdC8vYXNzaWduaW5nIGlkXG5cdGlmKGlkKXtcblx0XHRuZXdFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXHR9XG5cblx0cmV0dXJuIG5ld0VsO1xufVxuXG4vLyBjcmVhdGVzIGFuZCBhcHBlbmRzIHRoZSB0d28gY29sdW1ucyBiYXNlIGxheW91dCB0byBwYXJlbnRFbFxuZnVuY3Rpb24gcmVuZGVyQmFzZUxheW91dChwYXJlbnRFbCl7XG5cblx0Y29uc3QgbGVmdEhhbGYgPSBjcmVhdGVFbCgnZGl2JywgWydoYWxmLWNvbnQnXSwgZmFsc2UsICdsZWZ0SGFsZicpO1xuXHRjb25zdCByaWdodEhhbGYgPSBjcmVhdGVFbCgnZGl2JywgWydoYWxmLWNvbnQnXSwgZmFsc2UsICdyaWdodEhhbGYnKTtcblxuXHRwYXJlbnRFbC5hcHBlbmRDaGlsZChsZWZ0SGFsZik7XG5cdHBhcmVudEVsLmFwcGVuZENoaWxkKHJpZ2h0SGFsZik7XG5cblx0cmV0dXJuO1xufVxuXG5cbi8vIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IHRhYi9sYXN0IG9uZSB2aXNpdGVkXG5jb25zdCB0YWJzID0ge1xuXHRob21lOiB0cnVlLFxuXHRtZW51OiBmYWxzZSxcblx0Y29udGFjdDogZmFsc2Vcbn07XG5cbi8vIHJlbW92ZSBhbGwgY3VycmVudCBjb250ZW50IGZyb20gdGhlIHRhYnMgZGlzcGxhXG5mdW5jdGlvbiBjbGVhbkRpc3BsYXkoKXtcblxuXHRyZXR1cm5cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9