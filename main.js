$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(8000)
    .next()
    .fadeIn(8000)
    .end()
    .appendTo('#slideshow');
},  8000);