// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { potteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 2, 4);
const platter = makePottery("Platter", 5, 1);
const sculpture = makePottery("Sculpture", 7, 10);
const dish = makePottery("Dish", 3, 1);
const cup = makePottery("Cup", 2, 3);
/*console.log(mug);
console.log(platter);
console.log(sculpture);
console.log(dish);
console.log(cup);
*/

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2300);
const firedPlatter = firePottery(platter, 2100);
const firedSculpture = firePottery(sculpture, 2000);
const firedDish = firePottery(dish, 1700);
const firedCup = firePottery(cup, 2199);
/*console.log(firedMug);
console.log(firedPlatter);
console.log(firedSculpture);
console.log(firedDish);
console.log(firedCup);
*/

// Determine which ones should be sold, and their price
const pricedMug = toSellOrNotToSell(firedMug);
const pricedPlatter = toSellOrNotToSell(firedPlatter);
const pricedSculpture = toSellOrNotToSell(firedSculpture);
const pricedDish = toSellOrNotToSell(firedDish);
const pricedCup = toSellOrNotToSell(firedCup);

/*
console.log(pricedMug);
console.log(pricedPlatter);
console.log(pricedSculpture);
console.log(pricedDish);
console.log(pricedCup);
console.log(usePottery());
*/

// Invoke the component function that renders the HTML list
const potteryArray = usePottery();
console.log(potteryArray);
const potteryHTML = potteryList(potteryArray);
console.log(potteryHTML);
const potteryListClass = document.querySelector(".pottery__list");
if (potteryListClass) {
  potteryListClass.innerHTML = potteryHTML;
} else {
  console.log("No element with class 'pottery__list' found.");
}
