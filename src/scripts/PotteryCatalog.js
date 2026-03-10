let potteryInventory = [];

export const toSellOrNotToSell = (pottery) => {
  if (pottery.cracked === true) {
    console.log(`${pottery.shape} is cracked and cannot be sold.`);
  } else if (pottery.weight >= 6) {
    pottery.price = 40;
  } else if (pottery.weight < 6) {
    pottery.price = 20;
  }

  if (pottery.cracked === false) {
    potteryInventory.push(pottery);
  }

  return pottery;
};

export const usePottery = () => {
  return structuredClone(potteryInventory);
};
