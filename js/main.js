// ------ Page Transition Start ------ //
$(window).on("load", function(){
  $(function() {
    $('body').addClass('fade-in');
  });
})
// ------ Page Transition End -------- //


// -------------- Header start ------------------- //
// To top icon fades in
$(document).scroll(function () {
  var $top = $("#to-top")
  var $header = $('.header')
  $top.toggleClass('scrolled', $(this).scrollTop() > $header.height())
})

// Scroll to top
$('#to-top').click(function(){
  $('html,body').animate({
    scrollTop: 0
  }, 1000)
})

// Free shipping
setInterval(function(){
  $('#item-1').addClass('active')
  $('#item-2').addClass('active')
  setTimeout(function(){
     $('#item-1').removeClass('active')
     $('#item-2').removeClass('active')
   },3000)
 },6000)
// -------------- Header end ------------------- //


// -------------- Navbar start ------------------- //
$(window).on("load", function(){
  // Open menu by clicking hamburger
  $("#toggle").click(function() {
    $("#navbar-mobile").toggleClass("active")
  })
  // Close menu by clicking close
  $(".close-btn").click(function() {
    $("#navbar-mobile").toggleClass("active")
  })
  // Close menu by clicking nav item
  $("#navbar-mobile ul li a").click(function() {
    $("#navbar-mobile").toggleClass("active")
  })

})
// -------------- Navbar end ------------------- //


// -------------- Banner start ------------------- //
setInterval(function(){
  $('#content-1').addClass('active')
  $('#content-2').addClass('active')
  setTimeout(function(){
     $('#content-1').removeClass('active')
     $('#content-2').removeClass('active')
   },6000)
 },12000)
// -------------- Banner end ------------------- //


// -------------- Owl Carousel Start ----------- //
const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 3
  },
  960: {
    items: 4
  }
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      slideTransition: 'linear',
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: responsive
  })
});
// -------------- Owl Carousel End ----------- //


// -------------- Video Start ----------- //
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
// -------------- Video End ----------- //


// -------------WOW Animate Start ----------- //
new WOW().init();
// -------------WOW Animate End ------------ //
