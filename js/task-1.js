function getSmallestNumber(numbers) {
  let smallestNumber; //= numbers[0];

  for (const number of numbers) {
    if (typeof number === "number") {
      smallestNumber = number;
      break;
    }
  }

  if (smallestNumber === undefined) {
    return "Argument error";
  }

  for (const number of numbers) {
    if (typeof number === "number" && number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}
console.log(getSmallestNumber([1111, 41, 8, 10]));

// Task 2
function getTotalPrice(prices, promo) {
  let sum = 0;

  for (const currentPrice of prices) {
    sum += currentPrice;
  }

  console.log("raw price: " + sum);
  const delivery = sum >= 1500 ? 0 : 100;
  console.log("delivery price: " + delivery);

  switch (promo) {
    case "SUMMER10":
      sum -= sum * 0.1;
      console.log("promo 10% applied " + sum);
      break;
    case "VIP20":
      sum -= sum * 0.2;
      console.log("promo 20% applied " + sum);
      break;
    case "NEW5":
      sum -= sum * 0.05;
      console.log("promo 5% applied " + sum);
      break;
    default:
      //  discount 0%.
      console.log("no promo applied " + sum);
      break;
  }

  return sum + delivery;
}

console.log(getTotalPrice([100, 50, 50], "SUMMER10"));
console.log(getTotalPrice([100, 5, 50], "VIP20"));
console.log(getTotalPrice([100, 200, 50], ""));
console.log(getTotalPrice([100, 100, 1500], ""));
console.log(getTotalPrice([3000, 50, 50], "hh"));
console.log(getTotalPrice([100, 0, 50], "NEW5"));
