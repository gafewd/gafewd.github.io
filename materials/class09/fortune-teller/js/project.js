$(document).ready(function () {
	// EVENT HANDLERSdle
	// document.getElementById('clickme').onclick = getFortune;
	$('#clickme').click(getFortune)

	function getFortune () {
		// 1: Get your inputs!
		var hometown = $('#hometown').val();
		var partner = $('#partner').val();
		var numKids = $('#numKids').val();
		var jobTitle = $('#jobTitle').val();

		// 2: Run your func logic
		var fortuneStr = "You will be a " + jobTitle + " living in "
		+ hometown + " married to " + partner + " with " + numKids + " kids."

		// 3: Output
		$('#output').text(fortuneStr)
	}// end getFortune

})



