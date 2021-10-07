const rotate = document.querySelector(".navigation-chev");
const ulHide = document.querySelector(".choices");

rotate.addEventListener("click", () => {
  rotate.classList.toggle("rotated");
  ulHide.classList.toggle("hiden");
});
console.log(rotate);
