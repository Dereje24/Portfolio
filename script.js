$(document).ready(function(){
	console.log('ready')

  var slideIndex = 0;
// gallery is parent container for all images & .each goes throught any element with the class gallery. 
  $('.gallery').each(function(i, el){
    startSlideShow(el);
// this function will run on the element element that have class gallery 
  });

  function startSlideShow(el) {
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
      setTimeout(function() {startSlideShow(el)}, 5000);
  };
// this is calling startSlideShow function every 5 seconds!

  $('.menu-btn').on('click', function(e){
  	e.preventDefault();
  	console.log(this);
     	$('nav').toggle('expand');
  })
});

