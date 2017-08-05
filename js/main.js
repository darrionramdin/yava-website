$(document).ready(function(){
  $.scrollIt();
  var $grid = $('.portfolio-items').isotope({
    // options
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry'
  });

  $('.category li').on( 'click', function() {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $('nav').addClass("navbar--filled");
    } else {
      $('nav').removeClass("navbar--filled");
    }
});
