
$("document").ready(function () {


  var owl = $('#trusted__partners');
  owl.owlCarousel({
    items: 4,
    margin: 20,
    dots: true,
    nav: false,
    loop: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      320: {
        items: 1,
        loop: true,
      },
      415: {
        items: 2,
        loop: true,
      },
      600: {
        items: 2,
        loop: true,
      },
      768: {
        items: 3,
        loop: true,
      },
      992: {
        items: 4,
        loop: true,
      },
      1201: {
        items: 4,
      }
    }
  });
  $(".latest__work__slider .owl-prev").html('<img src="images/arrow-left-light.png" alt="img">');
  $(".latest__work__slider .owl-next").html('<img src="images/arrow-left-light.png" alt="img">');


  $('<span></span>').insertAfter('.offcanvas-body .menu-item-has-children .sub-menu')
  $(document).on("click", ".menu-item-has-children span", function (event) {

    // 		alert("alert");

    event.preventDefault();
    $(this).parent().children('.sub-menu').slideToggle();

    //  if ($(this).hasClass('active-tab')) {
    //    $(this).removeClass('active-tab');
    //   } else {
    //  $(this).addClass('active-tab');
    // }

  });


});


var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


$('.scrollTo').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 100);
  return false;
});


