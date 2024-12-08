function divible() {
  let res = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push(i);
    }
  }
  return res;
}

console.log(divible());
