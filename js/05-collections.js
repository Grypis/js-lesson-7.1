A;

//! =========================================================
/* function foo(obj) {
  return `<li>${(obj, label)}</li>`;
}

const template = foo({ label: 'red', color: '#F44336' });
console.log(template); */

//! =========================================================
function colorTemplate(colorObj) {
  return `<div class="color-picker__option" style="background-color: ${colorObj.color}">
        <p>${colorObj.label}</p>
      </div>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('\n');
}

const markup = colorsTemplate(options);

colorPickerContainerEl.innerHTML = markup;

/* function carTemplate() {}
function carsTemplate() {}

function userTemplate() {}
function usersTemplate() {}

//! =========================================================
/* const ulElem = document.querySelector('ul');

const liElem = `<li class="awawdaa">
    <a href='#'>TestLink</a>
</li>`; */

//? ulElem.insertAdjacentHTML('afterbegin', liElem);
// ulElem.textContent = '<li>Hello world</li>';
// ulElem.innerHTML = '<li>Hello world</li>';

//! =========================================================
