'use strict';

// Whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected
// If there is only one line of code to execute, we don't have to create the block in for loop (just like in if else statements)
// addEventListener() takes 2 arguments:
// 1) type / name of the event (eg. 'click)
// 2) function which will contain the code that should be executed (once the button is clicked), that will be an anonymous function (function without a name) also it is a function expression (because it's simply value i.e. function value)
// Do not use (.) in classList
// using classes is a really, really great and handy way of manipulating webpages
// adding and removing classes, is the main way in which we change styles on websites
// When you need to manipulate styles on a page,  then always just export the styles into a class, and then use the class just like below
// JavaScript Engine will call the function as soon as the event happens(in this case 'click') {We just have to define the function}
// If you want to use the same function in multiple event listeners, then you need to specify that function as a separate function (just like below) and then you can pass that function as an argument to multiple "add event listener" methods
// keyboard events are so-called global events because they do not happen on one specific element
// so global events like keyboard events, we usually listen on whole document
// document is basically a big object which contains a bunch of methods for all kinds of stuff
// by using addEventListener on the document, we are basically listening for events everywhere (no matter where they happen on the page, they will always trigger the event handler that we specify)
// There are 3 types of events for the keyboard:
// 1) keydown: it is fired when a key is pressed (usually this is the one which we use)
// 2) kepress: it is fired continuously as we keep our finger on a certain key  {this is depreceated, do not use this one}
// 3) keyup: this only happens when we lift our finger off the keyboard basically or off the key ( is fired when a key is released)
// Information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed
// anytime an event occurs, JavaScript generate an object and that object contains all the information about event itself and we can access that in the event handler function
// give the event handler function a parameter (as the event occurs, JavaScript will call this function with the event object as an argument) {this works because we do not call this function here ourselves (we only define it)}
// can access the event simply by logging the parameter (as done below)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
