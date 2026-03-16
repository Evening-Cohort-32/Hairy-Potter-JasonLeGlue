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

// Fire each piece of pottery in the kiln
debugger;
const firedMug = firePottery(mug, 2300);
const firedPlatter = firePottery(platter, 2100);
const firedSculpture = firePottery(sculpture, 2000);
const firedDish = firePottery(dish, 1700);
const firedCup = firePottery(cup, 2199);

// Determine which ones should be sold, and their price

const pricedMug = toSellOrNotToSell(firedMug);
const pricedPlatter = toSellOrNotToSell(firedPlatter);
const pricedSculpture = toSellOrNotToSell(firedSculpture);
const pricedDish = toSellOrNotToSell(firedDish);
const pricedCup = toSellOrNotToSell(firedCup);

// Invoke the component function that renders the HTML list

const potteryArray = usePottery();
const potteryHTML = potteryList(potteryArray);

const potteryListClass = document.querySelector(".pottery__list");

if (potteryListClass) {
  potteryListClass.innerHTML = potteryHTML;
} else {
  console.log("No element with class 'pottery__list' found.");
}
