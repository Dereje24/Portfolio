$(document).ready(function(){
  var slideIndex = 0;
// gallery is parent container for all images & .each goes throught any element with the class gallery.
  $('.gallery').each(function(i, el){
    slideShow(el);
// this function will run on the element element that have class gallery
  });

  function slideShow(el) {
  	var slides = $(el).children('.slides');
// this ^ is selecting the children of gallery that have class slides.
  	  for ( var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
// for loop is itterating through each slide and hidding all of them.
      slideIndex ++;
// incrementing our stating position form 0
      slides[slideIndex % slides.length].style.display = "block";
// get the slide at index 0,1 or 2 and change display from none to block.
      setTimeout(function() {slideShow(el)}, 5000);
  };
// this is calling slideShow function every 5 seconds!

$('.carousel').carousel({
  padding: 200
});

  $('.hamburger').on('click', function(e){
  	e.preventDefault();
    $('nav').toggle()
		.show();

  })
	// if($(window).width() > 995){
	// }

	$('#resume').on('click', function(e){
    $('.modalContainer').addClass('modalopen');
  });
  $('#xClose').on('click', function(e) {
      $('.modalContainer').removeClass('modalopen')
  })

	// $('form').on('submit', function(e){
	// 	e.preventDefault();
	// 	$('input, textarea').each(function(){
	// 		if($(this).val() === ""){
	// 			$(this).attr('placeholder', 'Invalid Input');
	// 			$(this).addClass('error');
	// 		}
	// 	});
	// });
});
