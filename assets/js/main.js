$(document).ready(function(){
     $(".hamburger-icon").click(function(e){
        console.log("click!");
        var belowNav = $(this).parent().find('.below-nav');
        if(belowNav.hasClass('active')){
            belowNav.removeClass('active');
        }else{
            belowNav.addClass('active');
        }
    });
    
    $('.nav-list-item a').click(function(event){
        $('.below-nav').removeClass('active');
    })
    
    $(".side-nav").sticky({topSpacing:0,
                          responsiveWidth: true,});
//    $(window).resize(function() {  
//       var bodyWidth = $(window).width();
//        if(bodyWidth < 1099){
//            
//            
//        }else{
//            $(".side-nav").sticky({topSpacing:10});
//            console.log('sticky started');
//
//        }        
//    });
    
//    var initBodyWidth = $(window).width();
//    if(initBodyWidth > 1099){
//            $(".side-nav").sticky({topSpacing:10});
//    }else{
//        $(".side-nav").sticky({topSpacing:0});
//    }
    
    $(".nav-list .nav-list-item a").click(function(event) {
    event.preventDefault();
    
    var href=$(this).attr('href');
        
    $('html, body').animate({
        scrollTop: $(""+ href).offset().top
    }, 500);
        
   
});
  });