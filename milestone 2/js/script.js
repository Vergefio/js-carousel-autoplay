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

//click cambiamento img

next.addEventListener("click", function () {
  objects[counterImages].classList.remove(`active`);
  objects[++counterImages].classList.add(`active`);

  previous.classList.remove(`hide`);
  if (counterImages === images.lenght - 1) {
    next.classList.add(`hide`)
  }

});

previous.addEventListener("click", function () {
  objects[counterImages].classList.remove(`active`);
  objects[--counterImages].classList.add(`active`);

  next.classList.remove(`hide`);
  if (counterImages === images.lenght - 1) {
    next.classList.add(`hide`)
  }

});

console.log(objects);