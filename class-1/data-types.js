// Primitive Data Types
// Number 
// String
// Boolean
// null
// undefined
// bigint
// symbol

// Examples of numbers
5
-5
-10.5213211
7.56
Infinity
-Infinity

// Strings
"This uses doubles quotes"
'This uses singles\' quotes' // '\' escapes characters
`This uses backticks`
"one" + "two" // "onetwo"
'4' + 4 // '45'
5 + '4' // '54'

// We can interpolate with backticks
`There are ${3 + 4} students in the room`

// Only backticks can be used for multiline strings
` 
  This is 
  a multiline
  string
`

// Get the length of a string
"abc".length // 3

// We can access characters in a astring with the bracket notation
"abc"[2] // "c"

// We cannot mutate a string with bracket notation
let s = 'bobbi'
s[4] = 'y'
s // 'bobbi'

// parse a string into a number
parseInt("123.454519") // 123
parseFloat("123.454519") // 123.454519
parseInt("foobar") // NaN

// Remove beginning and trailing spaces
"          Hello World           ".trim() // "Hello World"

// Booleans
true
false

// Falsy values
0 
-0
null
undefined
''
NaN
