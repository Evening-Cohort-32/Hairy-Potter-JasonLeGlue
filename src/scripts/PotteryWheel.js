let primaryKey = 1;

export const makePottery = (shape, weight, height) => {
  const newPot = {
    shape: shape,
    weight: weight,
    height: height,
    id: primaryKey,
  };

  primaryKey += 1;

  return newPot;
};
