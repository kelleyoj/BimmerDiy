

$(document).ready(function() {
  var nav = $(".nav-1");

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
      nav.addClass("scrolled");
    } else {
      nav.removeClass("scrolled");
    }
  })
});
