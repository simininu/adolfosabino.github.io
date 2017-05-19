$(document).foundation()

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

$(function() {
  $('strong').mousetip('.tip', -80, -140);
})

$(function(e){
	var bgs = [
		'#00aff4', // Blue
		'#6852aa', // Purple
		'#ff8f00', // Orange
		'#ff004b', // Pink
		'#FFDD00', // Yellow
		'#818181', // Gray
		'#64bc35', // Green
		'#000',    // Black
	], txt = [
		'#000', // Blue
		'#000', // Purple
		'#000', // Orange
		'#000', // Pink
		'#000', // Yellow
		'#000', // Gray
		'#000', // Green
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
  	if(bgs[n] == '#000') {
        $('.soft-skills-w').css('display', 'block');
        $('.soft-skills-b').css('display', 'none');
    } else {
        $('.soft-skills-w').css('display', 'none');
        $('.soft-skills-b').css('display', 'block');
    }
  });
});



