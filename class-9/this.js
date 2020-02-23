$(() => {
  $('.container').on('click', (e) => {
    console.log(this) // Window
  })
  console.log(this) // Window
  console.log(document)
})

$(function() {
  $('.container').on('click', function(e) {
    console.log(this) // div.container element
  })
  console.log(this) // document
  console.log(document)
})
