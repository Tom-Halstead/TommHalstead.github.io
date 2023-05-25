"use strict";

const logo = document.querySelector(".logo");
const myName = document.querySelector(".name");

const randomColor = () => {
  return (
    `#` +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

// const changeColor = function () {
//   myName.style.color =
//     `#` +
//     Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, "0")
//       .toUpperCase();
// };

document.body.addEventListener(`click`, () => {
  myName.style.color = `${randomColor()}`;
});

// setInterval(changeColor, 2000);
