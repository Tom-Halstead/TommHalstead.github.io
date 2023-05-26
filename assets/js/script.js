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

const bodyClick = document.body.addEventListener(
  `click`,
  () => (myName.style.color = `${randomColor()}`)
);
