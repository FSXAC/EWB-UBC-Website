var main = function() {
  $(".searchbar").focusin(function() {
    $(this).animate({
      width: '+=100px'
    });
  });

  $(".searchbar").focusout(function() {
    $(this).animate({
      width: '-=100px'
    });
  });
}

$(document).ready(main);
