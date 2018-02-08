$(document).ready(function(){
	console.log('ready')

	var slideIndex = 0;
slideShow();
function slideShow() {
	var slide = $('.slides');
	 for ( var i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";  
    }	
    slideIndex ++;

    if (slideIndex > slide.length) {
    		slideIndex = 1
    	};

    slide[slideIndex-1].style.display = "block"; 
    setTimeout(slideShow, 5000);

}
});

