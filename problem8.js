function check_big(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const ans = check_big(arr);
console.log(ans);
