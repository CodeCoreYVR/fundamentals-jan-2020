for ( let i = 65; i <= 90; i++) {
  let letter = ""
  for (let x = 1; x <= i - 64; x++) {
    letter += String.fromCharCode(i)
  }
  console.log(letter)
}

for ( let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i).repeat(i - 64))
}

