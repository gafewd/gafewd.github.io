$(document).ready(function () {

	// create a variable total, assigned to the number 0; this will be used to keep track of our cash register...total
	var total = 0

	// assign a .submit() event to <form id="entry">; remember, .sumbit() events can only be attached to <form> elements
	$('#entry').submit(function (event) {

		// prevent the form's default submit action to prevent the <form> from reloading
		event.preventDefault()

		// create a variable newEntry and assign it to the value inside of <input id="newEntry">
		var newEntry = $('#newEntry').val()

		// newEntry needs to be transformed from a "string" datatype into a number
		newEntry = parseFloat(newEntry)

		// increment the total variable with newEntry
		total += newEntry

		// change newEntry from a number to a string prefixed with a $
		newEntry = "$" + newEntry.toFixed(2)

		// append a <tr> including the newEntry variable into #entries
		$('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>')

		totalStr = "$" + total.toFixed(2)

		// output the new total, including .toFixed(2) and a $, to #total
		$('#total').text(totalStr)

		// clear the #newEntry input
		$('#newEntry').val('')
	})
})
