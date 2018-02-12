$("#movie-button").click(function(){
	$(".movie-page").show();
	$(".about-page").hide();
	$(".actor-page").hide();
	$(".awards-page").hide();
});

$("#about-button").click(function(){
	$(".movie-page").hide();
	$(".about-page").show();
	$(".actor-page").hide();
	$(".awards-page").hide();
});

$("#actors-button").click(function(){
	$(".movie-page").hide();
	$(".about-page").hide();
	$(".actor-page").show();
	$(".awards-page").hide();
});

$("#awards-button").click(function(){
	$(".movie-page").hide();
	$(".about-page").hide();
	$(".actor-page").hide();
	$(".awards-page").show();
});