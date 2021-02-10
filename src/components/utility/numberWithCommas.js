// changes number to have commas & 2 decimal place
export const numberWithCommas = (number) => {
  return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
