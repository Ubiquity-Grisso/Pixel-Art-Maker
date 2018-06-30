$(document).ready(function () {

	$('#sizePicker').submit(function makeGrid(grid) {
		const rows = $('#input_height').val();
		const cols = $('#input_width').val();
		//creates squares depending on the number of rows and columns chosen in the form (above variables)
		for (let i = 1; i <= rows; i++) {
			$('table').append('<tr></tr>');
			for (let j = 1; j <= cols; j++) {
				$('tr:last').append('<td></td>');
				$('td').attr("class", 'cells');
			}
		}
		grid.preventDefault();
		let colorPicked = $('#colorPicker').val();
		$('#colorPicker').on('change', function() {
			colorPicked = $('#colorPicker').val();
		});
		//this is a check to see if the drawing process is on
		let isDrawing = false;
	//changes the background color to the default white if right click
	$('#pixel_canvas').on('contextmenu', 'td', function(evt) {
		evt.preventDefault();
		colorPicked ='transparent';
		isDrawing = true;
		if (isDrawing) {
			$(evt.target).css('background-color', colorPicked);
		};
		return false;
	});

	//if the mouse is clicked start the drawring process
	$('#pixel_canvas').on('mousedown', 'td', function(evt) {
		evt.preventDefault();
		isDrawing = true;
		colorPicked = $('#colorPicker').val();
		if (isDrawing) {
			$(evt.target).css('background-color', colorPicked);
		};
	});
	//if the drawing process has started paint all the squares that the cursor hovers
	$('#pixel_canvas').on('mouseenter', 'td', function(evt) {
		if (isDrawing) {
			$(evt.target).css('background-color', colorPicked);
		}
	});

	//stop the drawing if the mouse button is released
	$('#pixel_canvas').on('mouseup', 'td', function(evt) {
		isDrawing = false;
	});

	//stop the drawing process if the mouse leaves the canvas
	$('#pixel_canvas').on('mouseleave', function(evt) {
		isDrawing = false;
	});
});
	//resets the canvas to empty
	$('#reset').on('click',function resetGrid() {
		$('table tr').remove();
	});
});
