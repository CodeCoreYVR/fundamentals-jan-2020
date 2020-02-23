$(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRXwQ970YPp0dKkjP4jFFhREmgksPX6Uc",
    authDomain: "todo-jan-2020.firebaseapp.com",
    databaseURL: "https://todo-jan-2020.firebaseio.com",
    projectId: "todo-jan-2020",
    storageBucket: "todo-jan-2020.appspot.com",
    messagingSenderId: "907633155386",
    appId: "1:907633155386:web:43fe1e79a674a0d8e58403",
    measurementId: "G-2RP61ZSLQB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  $('#task-form').on('submit', function(event) {
    // This will stop the default 
    // behaviour/action of the form when submitted
    event.preventDefault()
    
    const task = $('input[type=text]').val()
    // if task is '', it is falsey
    if (task) {
      // add an object representing the task to firebase
      firebase
        .database()
        .ref('/tasks')
        .push({
          name: task,
          isComplete: false
        })
    }

    // Reset the form after adding to the list with either way:
    this.reset()
    // $('input[type=text]').val('')
  })

  // The following will only add event listeners to elements 
  // that already exist in the DOM
  $('.delete').on('click', function(event) {
    $(this).closest('li.list-group-item').remove()
  })

  // The second optional param in .on() is a selector string 
  // to filter the descendants of the selected elements that trigger the event 
  // "this" refers to the a.delete that fired the event, not the document
  $(document).on('click', '.delete', function(event) {
    const key = $(this).parent().siblings().attr('id')
    firebase
      .database()
      .ref('/tasks')
      .child(key)
      .remove()
  })

  $(document).on('click', '.complete', function(event) {
    const isComplete = $(this).text() === 'Mark Incomplete'
    const taskName = $(this).parent().siblings().text()
    const key = $(this)
      .parent()
      .siblings()
      .attr('id')

    const task = firebase
        .database()
        .ref(`/tasks/${key}`)

    if (isComplete) {
      task.set({ 
        name: taskName, 
        isComplete: false 
      })
    } else {
      task.set({ 
        name: taskName, 
        isComplete: true 
      })
    }
  })

  // When a task is added to firebase, append a <li> to the DOM
  firebase
    .database()
    .ref('/tasks')
    .on('child_added', function(record) {
      $('ul.list-group').append(`
        <li class="list-group-item d-flex justify-content-between">
          <span id=${record.key}>${record.val().name}</span>
          <small>
            <a href="#" class="complete">Mark Complete</a>
            | 
            <a href="#" class="delete">Delete</a>
          </small>
        </li>
      `)
    changeComplete(record)
    })

  // When a task is removed from firebase,
  // remove the <li> from the DOM
  firebase
    .database()
    .ref('/tasks')
    .on('child_removed', function(record) {
      $(`#${record.key}`).closest('li.list-group-item').remove()
    })

  firebase
    .database()
    .ref('/tasks')
    .on('child_changed', function(record) {
      changeComplete(record)
    })

  function changeComplete(record) {
    if (record.val().isComplete) {
      $(`#${record.key}`).css('text-decoration', 'line-through')
      $(`#${record.key}`)
        .siblings()
        .children()
        .get(0)
        .innerText = 'Mark Incomplete'
    } else {
      $(`#${record.key}`).css('text-decoration', 'none')
      $(`#${record.key}`)
        .siblings()
        .children()
        .get(0)
        .innerText = 'Mark Complete'
    }
  }
})
