// ? Easy Going - write a for loop that will log the numbers 1 through 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// ? Get Even - write a for loop that will log only the even numbers 0 through 200
for (let evenNum = 0; evenNum <= 200; evenNum++) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
}

// ? Fizz Buzz Write a Javascript Application that logs all numbers from 1 - 100.
// ? If a number is divisible by 3, log "Fizz" instead of the number.
// ? If a number is divisible by 5, log "Buzz" instead of the number.
// ? If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ? Wild Wild Life - Instructions below
//? Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
//? Plantee just had her birthday; change Plantee's array to reflect her being a year older.
//? Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
//? Give D'Art a second hometown by adding "Hawkins"

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
wolfy.splice(3, 3, "Gotham City");
wolfy.splice(0, 0, "Gameboy");
console.log(wolfy);

const sharky = ["Sharky", "shark", 20, "Left Coast"];

const plantee = ["Plantee", "plant", 5000, "Mordor"];
plantee.splice(2, 2, "5001");
console.log(plantee);

const porgee = ["Porgee", "Porg", 186, "Ahch-To"];

const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
dart.push("Hawkins");
console.log(dart);

// ? Yell at the Ninja Turtles
// ? Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// ? Use a for of loop to call toUpperCase() on each of them and print out the result.

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
  let uppercaseName = turtle.toUpperCase();
  console.log(uppercaseName);
}
