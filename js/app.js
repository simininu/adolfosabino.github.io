$(document).foundation()

$(document).ready(function() {

    checkSize();

    $(window).resize(checkSize);
});

function checkSize(){
    if ($(".feather").css("display") == "block" ){
  
      $(function(){
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if((scroll_pos > 630) && (scroll_pos < 1460)) {
                $(".logo").css('color', '#FFF');
                $("nav li a").css('color', '#FFF');
                $("nav li:first-child").css('text-decoration', 'line-through');
            } else {
                $(".logo").css('color', '#000');
                $("nav li a").css('color', '#000');
                $("nav li:first-child").css('text-decoration', 'none');
            }
            if((scroll_pos > 1460)) {
                $("nav li:last-child").css('text-decoration', 'line-through');
            } else {
                $("nav li:last-child").css('text-decoration', 'none');
            }

        });
      });
    } else {

      $(function(){
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if((scroll_pos > 385) && (scroll_pos < 1180)) {
                $(".logo").css('color', '#FFF');
                $("nav li a").css('color', '#FFF');
                $("nav li:first-child").css('text-decoration', 'line-through');
                $(".tip").css('display', 'none');
            } else {
                $(".tip").css('display', 'none');
                $(".logo").css('color', '#000');
                $("nav li a").css('color', '#000');
                $("nav li:first-child").css('text-decoration', 'none');
            }
            if((scroll_pos > 1180)) {
                $("nav li:last-child").css('text-decoration', 'line-through');
            } else {
                $("nav li:last-child").css('text-decoration', 'none');
            }
        });
      });
    }
}


$(function() {
  $('strong').mousetip('.tip', -80, -140);
})

$(function(e){
	var bgs = [
		'#00aff4', // Blue
    '#F60C0C', // Red
    '#64bc35', // Green
		'#6852aa', // Purple
		'#ff8f00', // Orange
		'#FFDD00', // Yellow
    '#ff004b', // Pink
		'#818181', // Gray
		'#000',    // Black
	], txt = [
		'#000', // Blue
    '#000', // Red
    '#000', // Green
		'#000', // Purple
		'#000', // Orange
    '#000', // Yellow
		'#000', // Pink
		'#000', // Gray
		'#fff', // Black
	];

$('.change-color').click(function(e){

	var n = $(this).data('color-num');

	if(n > (bgs.length-1)){
		n = 0;
  	}
    $('.change-color').css({ 'color': (bgs[n]) });
  	$('.about').css({ 'background-color': (bgs[n]) });
  	$('.about-txt').css({ 'color': (txt[n]) });
  	n = n+1;
  	$(this).data('color-num',n);
  	console.log(bgs[n]);
  	if(bgs[n] == undefined) {
        $('.soft-skills-w').css('display', 'block');
        $('.soft-skills-b').css('display', 'none');
    } else {
        $('.soft-skills-w').css('display', 'none');
        $('.soft-skills-b').css('display', 'block');
    }
  });
});

function scrollToAnchor(anchor_class){
    var aTag = $("."+anchor_class+"");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$(".nav-about").click(function() {
   scrollToAnchor('about');
});

$(".arrow").click(function() {
   scrollToAnchor('about');
});

$(".nav-work").click(function() {
   scrollToAnchor('selected-works');
});

$(".go-top").click(function() {
   scrollToAnchor('intro');
});


$.fn.mousetip = function(tip, x, y) {
    
    var $this = $(this);
    
    $this.hover(function() {
        
        $(tip, this).show();
    
    }, function() {
    
        $(tip, this).hide().removeAttr('style');
    
    }).mousemove(function(e) {
        
        var mouseX = e.pageX + (x || 10);
        var mouseY = e.pageY + (y || 10);
    
        $(tip, this).show().css({
            
            top:mouseY, left:mouseX
            
        });
    });
};
