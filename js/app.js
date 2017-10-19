
$(".spoiler span").hide();

$(".spoiler").append("<button>Reveal a spoiler!</button>");

$(document).ready(function(){
	$("button").siblingslideToggle(2000)
});

	$("button").click(function(){
		$(this).prev().fadeIn(1500);
		$(this).hide();
	});
/*
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$(".rotate").click(function() {
    rotation += 5;
    $(this).rotate(rotation);
});
*/

$('img').click(function someFunction2() {
    $("#image").animate(
        {rotation: 360},
        {
          duration: 500,
          step: function(now, fx) {
              $(this).css({"transform": "rotate("+now+"deg)"});
          }
        }
    );
});