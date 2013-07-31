//Get the context of the canvas element we want to select
var ctx = document.getElementById("migration-status").getContext("2d");
var myNewChart = new Chart(ctx).Pie([
	{
		value: 30,
		color: "#772F2F",
	},
	{
		value: 70,
		color: "#2c3e50",
	}
]);

// jQuery.ready(function($) {
// 	// $(window).stellar();
// 	// $("#presentation").stellar();
// 	$("#presentation").find(".slide").windows();
// });