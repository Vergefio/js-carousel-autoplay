const images = [
  `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`
];

let counterImages = 0;
let imageTags = ``;

//contenitore
const objectWrapper = document.querySelector(`.objects-wrapper`);

//ciclare array

for (let i = 0; i < images.length; i++) {
  imageTags += `
  <img class="object" src="img/${images[i]}" alt="${images[i]}">
  `;
}

console.log(objectWrapper);


// bottoni
const next = document.querySelector(`.bottom`);
const previous = document.querySelector(`.top`);
previous.classList.add("hide")

//image tags

objectWrapper.innerHTML += imageTags;

const objects = document.getElementsByClassName(`object`)

objects[counterImages].classList.add(`active`);
//next.addEventListener("click", function () {}
//previous.addEventListener("click", function () {}

//click cambiamento img
const interval = setInterval(function () {
  objects[counterImages].classList.remove(`active`);
  objects[++counterImages].classList.add(`active`);
  console.log(objects);
  previous.classList.remove(`hide`);
  if (counterImages === images.length - 1) {
    next.classList.add(`hide`)
  } else {
    previous.classList.remove(`hide`)
  };

  objects[counterImages].classList.remove(`active`);
  objects[--counterImages].classList.add(`active`);
  previous.classList.remove(`hide`);
  if (counterImages === 0) {
    previous.classList.add(`hide`)
  } else {
    next.classList.remove(`hide`)
  }
}, 2000);


