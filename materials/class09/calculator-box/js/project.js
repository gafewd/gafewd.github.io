$(document).ready(function () {

	var total = 0;

	// Add 10 Event
	$('#a10').click(add10)

	function add10 () {
		total = total + 10
		$('#out').text(total)
	}

})
