//smooth-scrolling via http://css-tricks.com/snippets/jquery/smooth-scrolling/
//plus offset to compensate for fixed header

$(function() {
var dividerByName;
var dividerOffset;
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        //find the id of the link that just got clicked
        dividerByName = $(this).attr('href');
        //find the height of the nav in pixels
        dividerOffset = $('#navWrapper').outerHeight();
        //subtract that height from target.offset().top below
        $('html,body').animate({
          scrollTop: target.offset().top - dividerOffset
          }, 1000);
        return false;
      }
    }
  });
});

//only show the nav when the user has scrolled down the page 300px
$(window).scroll(function() {
  if ($(this).scrollTop() > 300)
   {
    $('#navWrapper').slideDown();
   }
  else
   {
    $('#navWrapper').slideUp();
   }
 });

//accordian menu behavior

$('.accordian').on('click', '.accordian-control', function(e) {
  e.preventDefault();
  $(this)
    .children('.accordian-panel')
    .not(':animated')
    .toggle();
  $(this)
    .find('span.accordian-menu-button')
    .nextAll().removeClass('accordian-plus')
    .addClass('accordian-minus');

    //this part isn't working. It toggles ALL of the +/-. :(
  // if ($('.accordian-plus')[0]){
  //   $('span.accordian-menu-button')
  //     // .children('.span.accordian-menu-button')
  //     .removeClass('accordian-plus')
  //     .addClass('accordian-minus')
  //   }
  // else {
  //   $('span.accordian-menu-button')
  //           // .children('.span.accordian-menu-button')
  //     .removeClass('accordian-minus')
  //     .addClass('accordian-plus')
  // };
});



