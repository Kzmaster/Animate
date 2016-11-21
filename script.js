$(document).ready(function () {
	$(".recipe-preview").children().hide();
	function chosenRecipe(momma) {
		$(".recipe-preview").children().hide();
		$(momma).fadeIn(400);
	}
	
	$("#applesauce").on("click", function () {
		chosenRecipe(".recipe-applesauce");
	});
	
	$("#muffins").on("click", function () {
		chosenRecipe(".recipe-muffins");
	});
	
	$("#turkeys").on("click", function () {
		chosenRecipe(".recipe-turkeys");
	});
	
	$("#chili").on("click", function () {
		chosenRecipe(".recipe-chili");
	});
	
	$("#pork").on("click", function () {
		chosenRecipe(".recipe-pork");
	});
	
	$("#fruit-salad").on("click", function () {
		chosenRecipe(".recipe-fruit-salad");
	});
	
	$("#soup").on("click", function (){
		chosenRecipe(".recipe-soup");
	});
	
	$(".button").hover(function () {
			$(this).animate ({
				"padding-left": "2rem"}, 600);
		});
	$(".button").mouseout(function (){
		$(this).animate ({
		"padding-left": "-2rem"}, 200);
	});
	
});

