// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divThree = (num) => {
  return num % 3 == 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}

console.log(divThree(num1));
console.log(divThree(num2));
console.log(divThree(num3));

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitilized = (array) =>  {
  //concats the capitilized first character with the rest of the string.
  return array.map(x => x.charAt(0).toUpperCase() + x.substring(1))
}

console.log(capitilized(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const ascendingNums = (array) => {
  //gets rid of non-number data types
  array = array.filter(x => typeof x === "number");
  //sorts numbers in ascending order
  return array.sort((a,b) => a - b);
}

console.log(ascendingNums(mixedDataArray))

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowel = (string) =>  {
  let vowels = ["a", "e", "i", "o", "u"];
  //if the current character of the string is within array vowels, return that index.
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i).toLowerCase()))  return i;
  }
  return "No vowel.";
}

console.log(firstVowel(vowelTester1));
console.log(firstVowel(vowelTester2));

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operator, num2) =>  {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) return "Can't divide by 0!";
    return num1 / num2;
  } else return "bad arguments";
}



// Uncomment and use the following console logs to test your function
 console.log(calculator(3, "*", 9))
// Expected output: 27

 console.log(calculator(16, "+", 3))
// Expected output: 19

 console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
