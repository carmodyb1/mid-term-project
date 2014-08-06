$(document).on('ready', function() {
  
 
// Save user input into a varible for the category name
// Create an a button in the DOM using the varible name
// Add the button to the last item in the list (will either need to do last and then up one or 
//   remove the last DOM element since it is the add category button, then add the new button, 
//   and then add back the add category button
//  Need event handler to do this

$(document).ready(function() {
	$(".add-category").click(function() {
		$(".new-category").show();
	});	
});

$(document).ready(function() {
	$(".btn-default").click(function(event) {
		event.preventDefault();
		$(".new-category").hide();
		var categoryName = $("#new-category-input").val();
		var newButton = $('<button type="button" class="btn btn-primary bottom-margin"></button>');
		newButton.text(categoryName);
		$(".add-category").before(newButton);
	});	
});


// Final closing for the document / ready function
});