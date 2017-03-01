var gridSize = 50
var gridNode = document.querySelector('section.grid')
var row
var cell
var id = 0

for(var i = 0; i < gridSize; i++) {
	row = document.createElement('div')
	row.classList.add('row')
	gridNode.appendChild(row)

	for(var j = 0; j < gridSize; j++) {
		cell = document.createElement('div')
		cell.classList.add('cell', 'white')
		cell.setAttribute('data-id', id)
		row.appendChild(cell)
		id++
	}
}
