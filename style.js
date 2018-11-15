$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    //  overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // 1000 number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // when done scrolling go back to (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});