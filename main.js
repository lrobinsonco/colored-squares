/** Variable Declarations **/
// We need to get the section that holds all the colors
var colorsNode = document.querySelector('.colors')

// Get the grid section so that we can later grab each cell
var cellNode = document.querySelector('.grid')

// the white color is going to be selected by default so we need to grab it
var whiteNode = document.querySelector('.colors > .white')

// Lets set the default color to white
var selectedColor = 'white'

// We need to have the clear button to clear the canvas later
var clear = document.querySelector('#clear')

// Grab the secret hidden form
// var formSectionNode = document.querySelector('section.submit')

/** Event Listeners **/
// Select the color that we want to paint with
colorsNode.addEventListener('click', function (e) {
  if(e.target.attributes['data-color']) {
    removeOtherSelected()
    selectedColor = e.target.attributes['data-color'].nodeValue
    e.target.classList.add('selected')
  }
})

// color the picture when we click the mouse button down
cellNode.addEventListener('mousedown', function(e) {
  if(e.target.classList.contains('cell')) {
    removeOtherColors(e.target)
    e.target.classList.toggle(selectedColor)
  }
})

// Paint while moving the mouse with the button down
cellNode.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('cell') && e.buttons === 1) {
    removeOtherColors(e.target)
    e.target.classList.toggle(selectedColor)
  }
})

// Clear the canvas when we click the clear button
clear.addEventListener('click', function(e) {
  var cells = document.querySelectorAll('.grid .cell')

  for(var i = 0; i < cells.length; i++) {
    removeOtherColors(cells[i])
    cells[i].classList.add('white');
  }
})

/** Function Declarations **/
// Remove the other colors from the cell
function removeOtherColors(el) {
  el.classList.remove('red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'lightgreen', 'indianred', 'hotpink', 'royalblue', 'brown')
}

// Remove the selected boxes from all of the color boxes
function removeOtherSelected() {
  var els = document.querySelectorAll('.colors > .cell')

  for(var i = 0; i < els.length; i++) {
    els[i].classList.remove('selected')
  }
}

/** Main logic **/
// Select the white color as it is the default
whiteNode.classList.add('selected')

// Unhide the secret section
// formSectionNode.classList.remove('hidden')
