// Log out 'Hello' every 1 second and stop after 10 seconds have passed
let count = 1
const id = setInterval(() => {
  console.log('Hello')
  if (count++ === 10) {
    clearInterval(id)
  }
}, 1000)

// This will run before setInterval
console.log('After setinterval')


// Change circle colours to value of input using jQuery
$('#form-1').on('submit', function(event) {
  $('.circle').css('background-color', $('input[type=text]').val())
})
