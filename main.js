const ultop = document.getElementById("topNav");
const topChevron = document.querySelector(".topChev");

topChevron.addEventListener("click", () => {
  topChevron.classList.toggle("toggled");
  ultop.classList.toggle("collapsible-hiden");
});

// if (ultop.width == `${580}px`) {
//   ultop.classList.remove("collapsible-hiden");
// }
console.log(ultop);
console.log(topChevron);
