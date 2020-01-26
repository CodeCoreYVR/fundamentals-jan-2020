// if/else statement

// The syntax for an if statement:

// Can be stand-alone
// if (expression/condition) {
      // code block that will execute only if the condition is true
// }

// You can write it on one line if there's one line of code in the code block

// if (expression/condition) // single line of code

// They can have an else/else if clause
// if (expression/condition) {
    // code block that will execute only if the condition is true
// } else {
  // code will run if the condifion is false
// }

// Whenever you have an else clause, a block of code will always run
// They can have an else/else if clause
// if (expression/condition) {
    // code block that will execute only if the condition is true
// } else if (expression/condition) {
  // code will run if the else if condition is true
  // but not run if the first if (condition) was true
// } else {
  // code will run if all previous conditions were false
// }

const year = parseInt(prompt("What year is your car?"))

if (isNaN(year)) {
  console.warn('Year has to be a number')
} else {
  if (year > 2020) {
    console.log('future')
  } else if (year > 2006) {
    console.log('new')
  } else if (year > 2000) {
    console.log('old')
  } else {
    console.log('Very old')
  }
}
