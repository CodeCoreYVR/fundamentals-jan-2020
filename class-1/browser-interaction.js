// Browser dialog:
alert('message') 
// displays a message and returns undefined 

confirm('do you want to proceed') 
// ask for confirmation and returns a boolean

prompt('what is your name?')
// ask for input
// returns a string if OK is clicked
// returns null if cancel

let name = prompt('what is your name?');
alert(`Hello ${name}`)
