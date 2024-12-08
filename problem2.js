function check_odd_even(num) {
  if (num % 2 == 0) {
    console.log("This number is even");
  } else {
    console.log("This number is odd");
  }
}

let num = parseInt(prompt("enter a number: "));

check_odd_even(num);
