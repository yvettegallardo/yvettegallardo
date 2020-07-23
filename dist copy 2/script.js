function splitScroll(){
  const controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
    duration:'200%',
    triggerElement '.about-title',
    triggerHook: 0
  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller);
}

splitScroll();

 //background: #396afc;  /* fallback for old browsers */
//background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
//background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

/*http://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif

https://media.giphy.com/media/KyAydCxkNpY89TZonP/giphy.gif

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/*clickablediv
$(".1a").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});*/

/*callshreffilesfor navigation   
$(function(){
  $('a').each(function(){
      if ($(this).prop('href') == window.location.href) {
          $(this).addClass('active'); $(this).parents('li').addClass('active');
      }
  });
});*/

