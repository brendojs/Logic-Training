function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let month = Math.floor(numDays / 22);
  let rate = 22 * dayRate(ratePerHour);

  let discRate = (1 - discount) * rate;
  let extraDays = numDays % 22;

  let numExtrDays = extraDays * dayRate(ratePerHour);
  return Math.ceil(month * discRate + numExtrDays);
}