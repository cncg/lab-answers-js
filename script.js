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
