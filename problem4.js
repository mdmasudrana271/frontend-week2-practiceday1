function leap_year(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 4 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}

leap_year(2023);
