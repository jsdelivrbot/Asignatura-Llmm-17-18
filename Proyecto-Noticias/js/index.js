function handleClicks() {

  let clickCount = 0;
 
  /* 
     Event handler, when <button class="js-clicker"> is clicked, one is added
     to variable and that value is set to innerHTML of 
     <span class=js-click-counter">
  */
 
  $(".js-clicker").click(event => {
  
      clickCount += 1;
     $(".js-click-counter").text(clickCount);
  });
}

// DOM ready function shorthand
// ref: https://learn.jquery.com/using-jquery-core/document-ready/

$(handleClicks);