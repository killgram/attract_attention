const randomizer = (lastChance: boolean) => {
  if (lastChance) {
    return true;
  } else {
    return Math.random() < 0.5;
  }
};

export { randomizer };
