window.onload = function() {

  // menu
  let navItemEl = document.querySelectorAll('nav ul .nav-item');
  const goHome = document.getElementById("toHome");
  const goProfile = document.getElementById("toProfile");
  const goSkill = document.getElementById("toSkill");
  const goProject = document.getElementById("toProject");

  for(let i = 0; i < navItemEl.length; i++){
    navItemEl[i].addEventListener("click", function(e){
      e.preventDefault();
      for(let j = 0; j < navItemEl.length; j++){
        navItemEl[j].classList.remove('active');
      }
      this.classList.add('active');
    });

    window.addEventListener("scroll", function(){
      for(let x = 0; x < navItemEl.length; x++){
        if(window.scrollY >= 0){
          goHome.classList.add('active');
          goProfile.classList.remove('active');
          goSkill.classList.remove('active');
          goProject.classList.remove('active');
        }
        if(window.scrollY > 897){
          goHome.classList.remove('active');
          goProfile.classList.add('active');
          goSkill.classList.remove('active');
          goProject.classList.remove('active');
        }
        if(window.scrollY > 2288){
          goHome.classList.remove('active');
          goProfile.classList.remove('active');
          goSkill.classList.add('active');
          goProject.classList.remove('active');
        }
        if(window.scrollY > 3989){
          goHome.classList.remove('active');
          goProfile.classList.remove('active');
          goSkill.classList.remove('active');
          goProject.classList.add('active');
        }
      }
    });
  }

  goHome.addEventListener("click", function() {
    gsap.to(window, 0.6, {
      scrollTo: 0
    })
  });

  goProfile.addEventListener("click", function() {
    gsap.to(window, 0.6, {
      scrollTo: 898
    })
  });

  goSkill.addEventListener("click", function() {
    gsap.to(window, 0.6, {
      scrollTo: 2289
    })
  });

  goProject.addEventListener("click", function() {
    gsap.to(window, 0.6, {
      scrollTo: 3990
    })
  });

  // event
  const eventEls = document.querySelectorAll(".event");
  eventEls.forEach(function(eventEl){
    new ScrollMagic.Scene({
      triggerElement: eventEl,
      triggerHook: .8,
    })
    .setClassToggle(eventEl, 'show')
    .addTo(new ScrollMagic.Controller());
  });

  // media : menu
  const headerEl = document.getElementById("header");
  const navEl = document.querySelector("nav");
  const menuEl = document.querySelector(".menu");
  const closeEl = document.querySelector(".close");
  const mainEl = document.getElementById("main");

  menuEl.addEventListener("click", function(){
    navEl.style.display = "flex";
  });

  closeEl.addEventListener("click", function(){
    navEl.style.display = "none";
  });

  const mediaViewContentMax = window.matchMedia('all and (max-width: 767px)');

  mediaViewContentMax.addEventListener("change", function(){
    if(mediaViewContentMax.matches){
      headerEl.classList.add("mobile");
      navEl.classList.add("mobile");
      mainEl.style.paddingTop = "70px";

      goHome.addEventListener("click", function() {
        gsap.to(window, 0.6, {
          scrollTo: 0
        })
        navEl.style.display = "none";
      });
    
      goProfile.addEventListener("click", function() {
        gsap.to(window, 0.6, {
          scrollTo: 828
        })
        navEl.style.display = "none";
      });
    
      goSkill.addEventListener("click", function() {
        gsap.to(window, 0.6, {
          scrollTo: 3647
        })
        navEl.style.display = "none";
      });
    
      goProject.addEventListener("click", function() {
        gsap.to(window, 0.6, {
          scrollTo: 6576
        })
        navEl.style.display = "none";
      });

    } else{
      headerEl.classList.remove("mobile");
      navEl.classList.remove("mobile");
      mainEl.style.paddingTop = "0px";
    }    
  });


  // scroll top
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

