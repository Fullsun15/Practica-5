
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $( document ).ready(function() {
    $(".button-collapse").sideNav();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, );
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  })

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

    $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

 

  var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, );
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });