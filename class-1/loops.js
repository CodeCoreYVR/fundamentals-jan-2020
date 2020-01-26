// While loop

// Initialize value e.g. let i = 1;
// while (condition/expression){
    // code will run while the condition is true

    // after the iteration we should increment the initializer
    // e.g. i++
// }

// Log the numbers from 1 to 100 to the console:

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

// The above while loop behaves exactly as the following:
// for the while loop, i is in the global scope
for (let i = 0;i <= 100;i++) {
  console.log(i) 
}

// If there is only one statement in the for loop, you can write
// it without the braces:
for (let i = 0;i <= 100;i++) console.log(i) 

// The break statement breaks out of the entire loop 
// and continues on with the program
for (let i = 5; i < 10; i++) {
  result += i
  if (i % 3 === 0) break
}

// continue terminates the current iteration and moves on to the next iteration 
let result = 0
for (let i = 5; i < 10; i++) {
  if (i % 3 === 0) continue
  result += i
}

// Although continue terminates the current iteration 
// any code before continue in the current 
// iteration is still run
let result = 0
for (let i = 5; i < 10; i++) {
  result += i // this will run regardless of continue
  if (i % 3 === 0) continue
}

// A do while loop will run once before checking the condition
do {
  console.log('This will run')
} while (false)
