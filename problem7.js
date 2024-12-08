function duplicate_remove(arr) {
  let ans = [];
  arr.forEach((element) => {
    if (!ans.includes(element)) {
      ans.push(element);
    }
  });
  return ans;
}

let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let ans = duplicate_remove(arr);
console.log(ans);
