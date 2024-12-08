function monthlySavings(arr, cost) {
  if (!Array.isArray(arr) || typeof cost != "number") {
    return "invalid input";
  } else {
    let total = 0;
    arr.forEach((element) => {
      if (element >= 3000) {
        total += element - (element * 20) / 100;
      } else {
        total += element;
      }
    });
    total -= cost;
    // return total;
    if (total < 0) {
      return "earn more!";
    } else {
      return total;
    }
  }
}

let res = monthlySavings(100, [900, 2700, 3400]);
console.log(res);
