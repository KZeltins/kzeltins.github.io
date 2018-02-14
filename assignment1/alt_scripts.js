/* DISCLAIMER: SOME PARTS OF THE CODE HAVE BEEN DIRECTLY OR INDIRECTLY UTILIZIED FROM THIRD PARTY SOURCES. SOURCES USED INCLUDE stackoverflow, W3Schools AND Communications Lab Class Notes, AMONG OTHERS. FOR SPECIFIC REFERENCES PLEASE INQUIRE SEPARATELY. */

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