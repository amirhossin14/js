let n = 0;

while (n < 15 * 25) {
  n++;
}

console.log(n);
//
let result = "";
let i = 5;

do {
  i = i + 1;
  result = result + i;
} while (i < 4);

console.log(result);
//
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let a = 0;
let text = "";

for (; cars[i]; ) {
  text += cars[i];
  i++;
}
