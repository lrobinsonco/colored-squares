var colorsNode = document.querySelector('.colors')
var cellNode = document.querySelector('.grid')
var selectedColor = 'white'

colorsNode.addEventListener('click', function (e) {
  if(e.target.attributes['data-color']) {
    removeOtherSelected()
    selectedColor = e.target.attributes['data-color'].nodeValue
    e.target.classList.add('selected')
  }
})

cellNode.addEventListener('click', function(e) {
  if(e.target.classList.contains('cell')) {
    removeOtherColors(e.target)
    e.target.classList.toggle(selectedColor)
  }
})

function removeOtherColors(el) {
  el.classList.remove('red', 'blue', 'green', 'black', 'white')
}

function removeOtherSelected() {
  var els = document.querySelectorAll('.colors > .cell')

  for(var i = 0; i < els.length; i++) {
    els[i].classList.remove('selected')
  }
}
