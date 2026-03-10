// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4);
let platter = makePottery("Platter", 5, 1);
let sculpture = makePottery("Sculpture", 7, 10);
let dish = makePottery("Dish", 3, 1);
let cup = makePottery("Cup", 2, 3);
/*console.log(mug);
console.log(platter);
console.log(sculpture);
console.log(dish);
console.log(cup);
*/

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2300);
let firedPlatter = firePottery(platter, 2100);
let firedSculpture = firePottery(sculpture, 2600);
let firedDish = firePottery(dish, 1700);
let firedCup = firePottery(cup, 2199);
console.log(firedMug);
console.log(firedPlatter);
console.log(firedSculpture);
console.log(firedDish);
console.log(firedCup);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
