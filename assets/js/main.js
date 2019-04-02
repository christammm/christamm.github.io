$(document).ready(function(){
    $(".side-nav").sticky({topSpacing:10});
    
    $(".nav-list-item a").click(function(event) {
    event.preventDefault();
    
    var href=$(this).attr('href');
        
    $('html, body').animate({
        scrollTop: $(""+ href).offset().top
    }, 500);
});
  });