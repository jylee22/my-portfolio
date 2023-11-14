window.onload = function() {
  // click top
  const clickTop = document.getElementById("top");

  window.addEventListener("scroll", function(){
    if(window.scrollY <= 500) {
      gsap.to(clickTop, 0.2, {
        opacity: 0,
        display: "none"
      })
    } else {
      gsap.to(clickTop, 0.2, {
        opacity: 1,
        display: "block"
      })
    }
  }, 300);

  clickTop.addEventListener("click", function(){
    gsap.to(window, 0.6, {
      scrollTo: 0
    })
  });

}