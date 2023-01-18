const hideSummer = document.getElementById("summerSection");
const hideSummerSection = document.getElementById("summerHideSection");
const cta = document.getElementById("cta");
const cards = document.querySelectorAll(".card");

hideSummerSection.addEventListener("click", () => {
  hideSummer.classList.toggle("hidden");
});

cta.addEventListener("click", () => {
  alert(cards.length - 4);
});
