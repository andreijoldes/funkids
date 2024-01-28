var header = document.getElementById("header");
  var prevScrollPos =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (prevScrollPos > currentScrollPos) {
     // header.style.top = "0";
    } else {
      //header.style.top = "-60px"; /* Adjust the value based on your header height */
    }
    prevScrollPos = currentScrollPos;
  };