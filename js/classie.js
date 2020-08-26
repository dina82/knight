$(document).ready(function(){
  /*isotope of competition image*/
$('.iso-image').isotope({
itemSelector: '.item',
layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
$('.iso-nav ul li').removeClass('active');
$(this).addClass('active');

var selector = $(this).attr('data-filter');
$('.iso-image').isotope({
filter: selector
});
return false;
});



  $(window).scroll(function(){
    if($(this).scrollTop() >945){
        $("#nav_header").addClass("scroll_top");
    }
    else{
      $("#nav_header").removeClass("scroll_top");

    }
    })
})