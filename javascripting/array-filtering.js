var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered;
function evenNumbers (number) {
  return number % 2 === 0;
}
filtered = numbers.filter(evenNumbers);
console.log(filtered);
