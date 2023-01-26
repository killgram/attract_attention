const compliments = require("./compliments.json");

const pickCompliment = (titleData: any) => {
  const { appeal } = titleData;
  const t = Math.floor(Math.random() * compliments.length);
  return `${appeal}, ${compliments[t].t}`;
};

export { pickCompliment };
