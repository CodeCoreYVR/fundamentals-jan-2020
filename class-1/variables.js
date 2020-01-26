/*
  A variable is a container that holds a value
  It has accessibility, name, and value

  the accessibility is set by one keyword
  const, let, or var
*/

// Syntax is as follows:
// Here we declare and initialize a variable
// {keyword} {variableName} = {value} 

// When declaring a variable without a value,
// the space in memory gets assigned but its value is undefined
let helloWorld;
helloWorld // undefined

// Declare a variable that can't be reassigned/rebinded:
const myNumber = 2;
myNumber = 3 // TypeError

// Declare a variable that can be reassigned:
var name = "Joe";
let boolean = true;

// set a value to null
let empty = null

// Conventions:
// camelCase (this is the convention in JS)
const camelCase = 'value'
// snake_case
const snake_case = 'value'

// Rules for variable names
// * cannot contain spaces
// * must start with a letter, _ or $
// * may contain digits if it's not the starting character
// * are case-sensitive
// * can't be a reserved word

