const arr = [2, 4, 1, 6, 3, 7, 9, 10, 5];

// arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
}

console.log(arr);
