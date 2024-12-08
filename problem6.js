function check_big(arr) {
  let frnd = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > frnd.length) {
      frnd = arr[i];
    }
  }
  return frnd;
}
let arr = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let res = check_big(arr);
console.log(res);
