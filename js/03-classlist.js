//!   =========================================================
// const elem = document.querySelector('li');
// console.log(elem.classList);
// elem.classList.add('my-item', '123', '321', '311');

//? elem.classList.remove('site-nav__item', 'my-item', '123', '321', '311');

/* setInterval(() => {
  elem.classList.toggle('my-item');
}, 1000);
 */

//? elem.classList.replace('123', '999');

/* if (elem.classList.contains('my-item')) {
  alert('Hello');
} else {
  alert('Bye');
} */

//!   =========================================================

/* const liElems = document.querySelectorAll('li');
// console.log(liElems);
for (let i = 0; i <= liElems.length; i++) {
  const className = i % 2 === 0 ? 'even' : 'odd';
  liElems[i].classList.add(className);
}
 */

//!   =========================================================
const liElems = document.querySelectorAll('li');
/* const style = (liElem.style.backgroundColor = 'tomato');
console.log(style);
 */

for (let i = 0; i < liElems.length; i++) {
  liElems[i].style.backgroundColor = 'tomato';
  liElems[i].style.width = `${i * 10}px`;
}
