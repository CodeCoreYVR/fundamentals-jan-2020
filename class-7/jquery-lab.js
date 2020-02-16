// jQuery Lab: http://bit.ly/jquery-lab

$('*') // Select all elements
$('ul a') // descendant selector
$('h1, h2') // select all <h1> tags AND <h2>
$('.shape') // select all shapes
$('.shape.black') // select all black shapes
$('h1') // select all h1 tags
$('.small.circle') // select all small circles
$('li > a').eq(3) // get 4th element of the JQuery collection

// Select all shapes:
// querySelector returns the single Node
// querySelectorAll returns a NodeList
// while getElementsByClassName returns an HTML collection
document.querySelector('div.shape')
document.querySelectorAll('div.shape')
$('div.shape')

// Select all black shapes
$('div.black.shape')

// Count all shapes
$('.shape').length

// Count all black shapes
$('.black.shape').length

// Count all black shapes and blues shapes
$('.black.shape, .blue.shape').length

// Select all h1 tags
$('h1')

// Select all small circles
$('.small.circle')

$('.small.circle')[0] // gives us the node
$('.small.circle').eq(0) // wraps the node in a set that has access to jQuery methods

// When getting an attribute, only the first element's attribute is returned
$('a').attr('href')

// Get all the links in an array
const links = $('a')
const linksArray = []
for (let i = 0; i < links.length; i++) {
  linksArray.push(links.eq(i).attr('href'))
}

// When setting attributes, every element in the collection will be set
// Add 'http://' to use the HTTP protocol
$('a').attr('href', 'http://www.codecore.ca')

// set all class attributes to 'highlight'
$('a').attr('class', 'highlight')
$('.shape').attr('class', 'highlight')

// Add or remove a class
$('.shape').addClass('highlight')
$('.shape').removeClass('highlight')
$('.shape').toggleClass('highlight')

// Remove all blue shapes
$('.blue.shape').remove() // remove from the DOM
$('.blue.shape').hide() // change display property to none

// Remove all shapes in the orange container
$('#orange-container .shape').remove()

// Remove all small red circles
$('.small.circle.red').remove()

// Get the contents of the reset button
$('#reset').html()

// Try to get the HTML content of all the links
// Only the first content is returned
$('a').html()

// One way to get the links
const links = $('a')
const arr = []
for (let i = 0; i < links.length; i++) {
  arr.push(links.eq(i).html())
}

// Change the content of the reset button to "Launch Missiles"
$('#reset').html('Launch Missiles')

// Change all h1 tags to "[Your name] is cool!"
$('h1').html(`${prompt('What is your name?')} is cool!`)

// Select all shapes in the purple conatiner using .chilren()
$('#purple-container').children()

// Get the green container using .parent()
$('.grey.large.diamond').eq(1).parent()
$('.medium.red.diamond').parent()

// Select all <li> that contain a link
// .parent() gets all parents wrapped in a set
$('li > a').parent() 

// Hide the purple container
$('#purple-container').hide()
// Show the purple container
$('#purple-container').show()

// Events

// Log "shape clicked" when a shape is clicked
$('.shape').on('click', function(e) {
  console.log('shape clicked')
})

document.querySelectorAll('.shape').forEach(node => {
  node.addEventListener('click', function(e) {
    console.log('shape clicked')
  })
})

// Log 'blue circle go away' when a mouse enters a blue circle
$('.shape.blue').on('mouseenter', function(e) {
  console.log('blue circle go away!');
}) 

document.querySelectorAll('.shape.blue').forEach(function(node) {
  node.addEventListener('mouseenter', function(e) {
    console.log('blue circle go away!');
  })
})
// Log 'blue circle goodbye!' when a mouse enters a blue circle
$('.shape.blue').on('mouseleave', function(e) {
  console.log('blue circle goodbye!');
}) 

document.querySelectorAll('.shape.blue').forEach(function(node) {
  node.addEventListener('mouseleave', function(e) {
    console.log('blue circle goodbye!');
  })
})

// When mouseenters any <tr>, set the class to 'highlight'
$('tr').on('mouseenter', function(e) {
  $(this).attr('class', 'highlight')
  // $(e.currentTarget).attr('class', 'highlight')
})

const tr = document.getElementsByTagName('tr')
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener('mouseenter', function(e) {
    tr[i].classList.add('highlight')
  })
}

// When mouseleaves any <tr>, remove the class of 'highlight'
$('tr').on('mouseleave', function(e) {
  $(this).attr('class', '')
  // $(e.currentTarget).attr('class', 'highlight')
})

const tr = document.getElementsByTagName('tr')
for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener('mouseleave', function(e) {
    tr[i].classList.remove('highlight')
  })
}

// When any shape is clicked, log the value of its class
$('.shape').on('click', function(e) {
  console.log($(this).attr('class'))
})

// Hide the shape when it's clicked
$('.shape').on('click', function(e) {
  $(this).hide()
})

// Hide the container of the shape that was clicked
$('.shape').on('click', function(e) {
  $(this).parent().hide()
})

// When a container is clicked, remove all shapes inside of it
$('.container').on('click', function(e) {
  $(this).children().remove()
})

// Event Bubbling
// event.currentTarget or 'this' refers to the element that the event was attached to
// event.target is the original element that fired the event

$('.container').on('click', function(e) {
  console.log('currentTarget:', e.currentTarget)
  console.log('target:', e.target)
})

$('.large.blue.square').on('click',function(e) {
  console.log('currentTarget:', e.currentTarget)
  console.log('target:', e.target)
})

// Enable event capturing:
document.querySelectorAll('.container').forEach(node => {
  node.addEventListener('click', function(e) {
    console.log('currentTarget:', e.currentTarget)
    console.log('target:', e.target)
  }, true)
})

document.querySelectorAll('.square.blue.large').forEach(node => {
  node.addEventListener('click', function(e) {
    console.log('currentTarget:', e.currentTarget)
    console.log('target:', e.target)
  }, true)
})


