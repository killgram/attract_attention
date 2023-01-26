const pickImage = (imagesData: any) => {
  const { total, link } = imagesData;
  const imgNumber = Math.floor(Math.random() * total);
  return `${link}${imgNumber}.jpg`;
};

export { pickImage };
