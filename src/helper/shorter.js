const shrterPrice = async (data) => {
  const dataPrice = data.prices;
  dataPrice.forEach((e) => {
    e[1] = e[1].toFixed(0);
  });
  console.log(dataPrice)
  return dataPrice;
};

export { shrterPrice };
