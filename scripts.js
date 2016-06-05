/************************************************************
*************************************************************
******************* jQuery *********************************
*************************************************************
*************************************************************/

//9.1 - What is jQuery? 
//jQuery is a JavaScript library that allows users to manipulate the DOM in an easy way.
//To get started using it, you'll need the following things:
//Things you can do with jQuery.
	//Add elements without reloading the page every time.
	//Change menu itmes when users mouse over them
	//Alert users when a form field is missing.
	//Add motion and transitions
	//Load data from a server 
	//JavaScript versus jQuery

/* HelloWorld */
$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
});

/* Elephant and Donut Functions */
	//hide,fade, shake, bounce, right

$(document).ready(function(){
	$('#hideButton').click(function(){
		$('#elephant').hide();
	});
	$('#fadeInButton').click(function(){
		$('#elephant').fadeIn(2000);
	});
	$('#shakeButton').click(function(){
		$('#elephant').effect("shake");
	});
	/*
	$('bounceButton').click(function(){
		$('#elephant').bounce();
	});*/
	$( "#rightButton" ).click(function() {
  		$( "#elephant" ).animate({ "left": "+=50px" }, "slow" );
	});
 
	$( "#leftButton" ).click(function(){
  		$( "#elephant" ).animate({ "left": "-=50px" }, "slow" );
	});
	// $('#rightButton').click(function(){
	// 	$('#elephant').animate({"left": "+=50px"}, "slow");
	// });
	// $('#leftButton').click(function(){
	// 	$('#elephant').animate({"left": "-=50px"}, "slow");
	// });
});

$(document).ready(function(){
	$('#reveal').click(function(){
		$('#fadeIn1').fadeIn(2000);
	});
});

$(document).ready(function(){
	$('button2').click(function(){
		$('#fadeIn1').fadeIn(2000);
	});
});

// Functions for Playground #2
// These move the text around.
$(document).ready(function(){
	$("#up").click(function(){
		$("#change").animate({top:30}, 200);
	});//end up
	$("#down").click(function(){
		$("#change").animate({top:500}, 2000);
		$("#change").text("<--Check out that shirt!");
	});//end down
	$("#color").click(function(){
		$("#change").css("color", "orange");
	});//end color change
	$("#hide").click(function(){
		$("#change").toggle("fast");
	});//end disappear
});//end doc ready

//Intern of the day
$(document).ready(function(){
	$("#clickMe").click(function(){
		$("img").fadeIn(1000);
		$("#picframe").slideToggle("slow");
	});
}); 

//Do you like my shirt?
/*$(document).ready(function(){
	$(".talk").click(function(){
		alert("Do you like my shirt?");
	});
});
*/
/***********************************/
/***********************************/
/* jQuery playground*/
/***********************************/
/***********************************/

//
$(document).ready(function(){
    $("button1").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});

$(document).ready(function(){
	$("#buttonUno").click(function(){
		$("#image-area").hide();
	});
});

$(document).ready(function(){
	$("#buttonDos").click(function(){
		$("#image-area").fadeIn();
	});
});

$(document).ready(function(){
	$("#buttonTres").click(function(){
		$("#image-area").slideDown("slow");
	});
});

$(document).ready(function(){
	$("#buttonCuatro").click(function(){
		$("image-area").toggle("bounce", { times:3 }, "slow");
	});
});

$(document).ready(function(){
	$("buttonCinco").click(function(){
		$("image-area").animate({left: "250px"});
	});
});

$(document).ready(function(){
				
				$(".head_spin").click(function(){
					$(this).effect("shake");
					$(".head_spin p").remove();
					var msg = "Bryce, that shirt is making my head spin.";
					alert(msg);
					
				});//end click function
			});//end doc ready
			
//Intern Box
//9.2 jQuery set up
//1. Your script tag on the index.html page. Here's our example:
//    <script src="Session10-jqueryintro.js"></script>

//2. A link to jQuery in your <head>, much like we did with Bootstrap. 
//    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

//9.3 - A breakdown of a jQuery function
//The $ 
//(document)


//9.4 - jQuery documentation
//9.5 - More functions
/*
$(document).ready(function(){
	$('jQueryButtonOne').click(function(){
		$(this).hide();
	});
});

$(document).ready(function(){
	$('vanish').click(function(){
		$(this).vanish('slow');
	});
});
*/

//9.6 - MOre practice

