$(document).ready(function() {
  $("body").mousemove(function(e){
    $("body").css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
  });
});

// Wrap every letter in a span
$('.mainTitle').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.mainTitle .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.mainTitle',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


$('.fullButton').click(function(){
   window.location.href='index.html';
})
