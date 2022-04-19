
(function($) { "use strict";
 
    // End Document Ready
              if($('#gallery-slider').length){
                  $('#gallery-slider').slick({
                      dots: false,
                      arrows:false,
                      autoplay:false,
                      autoplaySpeed:5000,
                      infinite: true,
                      navigation:false,
                      speed: 700,
                      slidesToShow:1,
                      slidesToScroll: 1,

                  });
              }; 

})(jQuery); 