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

logo.addEventListener(
  `mouseover`,
  () => (logo.style.color = `${randomColor()}`)
);

const bodyClick = document.body.addEventListener(
  `click`,
  () => (myName.style.color = `${randomColor()}`)
);
