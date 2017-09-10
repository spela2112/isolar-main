$(document).ready(function(){
	$('.first_profile').hide(function(){
    });
 });

$(document).ready(function(){
    $("#profile_button1").click(function(){
        $(".first_profile").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
	$('.second_profile').hide(function(){
    });
 });

$(document).ready(function(){
    $("#profile_button2").click(function(){
        $(".second_profile").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
	$('.third_profile').hide(function(){
    });
 });

$(document).ready(function(){
    $("#profile_button3").click(function(){
        $(".third_profile").animate({
            height: 'toggle'
        });
    });
});