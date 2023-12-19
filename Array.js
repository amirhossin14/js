var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
fruit.sort();
console.log(fruit);
//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
fruit.pop();
console.log(fruit);
//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
fruit.reverse();
console.log(fruit);
//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
fruit.shift();
console.log(fruit);
//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
fruit.push();
console.log(fruit);
//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
var bowl = foods.slice(0, 2);
console.log(bowl);

//
var foods = ["Apple", "Pineapple", "watermelon", "Talbi"];
foods.unshift("Dragon", "blueberry");
console.log(foods);

//
var ages = [27, 65, 19, 73, 10];
var result = ages.filter(check);
function check(age) {
  return age >= 16;
}
console.log(result);

//
var myArray = [
  [4, 8],
  [9, 5],
  [6, 7],
];
var newArray = myArray.flat();
console.log(newArr);

//
var text = "Hi good day  Muhammad";
var position = text.search("isn't");
console.log(rejected);
