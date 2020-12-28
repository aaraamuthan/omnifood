$(document).ready(function() {
  const nav = document.querySelector("nav");
  nav.classList.remove("sticky");
  let waypoint = new Waypoint({
    element: document.getElementsByClassName("section-features"),
    handler: function(direction) {
      // nav.classList.toggle("sticy");
      if(direction == "up") {
        nav.classList.remove("sticky");
      }
      else {
        nav.classList.add("sticky");
      }
    }, offset: "60px"
  });

  // Smooth animating for cta buttons

  $(".js--go-to-plan").click(function () {
    $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1500);
  })

  $(".js--go-to-features").click(function () {
    $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
  })

  // Smooth Scrolling
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  /* ANIMATIONS ON SCROLL*/
  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animate__animated animate__fadeInUp")
  },{
    offset: "50%"
  });

  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animate__animated animate__fadeInDown")
  },{
    offset: "50%"
  });

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animate__animated animate__fadeInUp")
  },{
    offset: "50%"
  });

  $(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass("animate__animated animate__pulse")
  },{
    offset: "50%"
  });

  
  $.fn.hasName = function(name) {
    return this.prop('name') == name;
  }

  $.fn.addName = function(name) {
    this.attr('name', name);
  }
  
  // Mobile navigation
  
  $(".js--nav-icon").click(function() {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon ion-icon");
    nav.slideToggle(200);
    if (icon.hasName("reorder-three-outline")) {
      icon.removeAttr("name");
      icon.addName("close-outline");
    } else {
      icon.removeAttr("name");
      icon.addName("reorder-three-outline");
    }
  })
});