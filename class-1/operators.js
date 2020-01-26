// comparison operators
// < > <= >=

// Equality operators
// Double equals (equality) will only compare the value
// It has a loose idea of equality 
// because it tries coerce one or both sides to similar types
// == != 

2 == 2 // true
2 != 2 // false
2 == '2' // true
 
// Strict Equality Operator
// triple equals will compare the value and its data type
// === !==

2 === 2 // true
2 !== 2 // false
2 === '2' // false

// Logical operators
// && (and)
// || (or)

// with the && (AND) operator both operands must be true to return true
true && true // true
true && false // false
false && true // false
false && false // false

// with the || (OR) operator at least one operand must be true to return true
true || true // true
false || true // true
true || false // true
false || false // false
