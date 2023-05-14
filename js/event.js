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
      triggerHook: .5,
    })
    .setClassToggle(eventEl, 'show')
    .addTo(new ScrollMagic.Controller());
  });

  // media : menu
  const navEl = document.querySelector("nav");
  const menuEl = document.querySelector(".menu");
  const closeEl = document.querySelector(".close");

  menuEl.addEventListener("click", function(){
    navEl.classList.add("show");
  });

  closeEl.addEventListener("click", function(){
    navEl.classList.remove("show");
  });

  

  // media
  const mediaViewContenMobile = window.matchMedia(`(max-width: 992px)`);
  const mediaViewContenMax960 = window.matchMedia(`(max-width: 960px)`);
  const mediaViewContenMax920 = window.matchMedia(`(max-width: 929px)`);
  const mediaViewContenMax760 = window.matchMedia(`(max-width: 769px)`);
  const mediaViewContenMax700 = window.matchMedia(`(max-width: 706px)`);
  const mediaViewContenMax680 = window.matchMedia(`(max-width: 689px)`);
  const mediaViewContenMax620 = window.matchMedia(`(max-width: 629px)`);
  const mediaViewContenMax560 = window.matchMedia(`(max-width: 569px)`);
  const mediaViewContenMax480 = window.matchMedia(`(max-width: 489px)`);
  const mediaViewContenMax370 = window.matchMedia(`(max-width: 379px)`);

  const wrapperEl = document.querySelector(".wrapper");
  
  window.addEventListener("scroll", function(){
    console.log(window.scrollY);
  });

  // mobile size > max-width: 992px
  if(mediaViewContenMobile.matches === true) {
    wrapperEl.classList.add("mobile");

    goHome.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 0
      })
      navEl.classList.remove("show");
    });
  
    goProfile.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 828
      })
      navEl.classList.remove("show");
    });
  
    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 2674
      })
      navEl.classList.remove("show");
    });
  
    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 5283
      })
      navEl.classList.remove("show");
    });
  } else{
    wrapperEl.classList.remove("mobile");
  }
  
  // max-width: 960px
  if(mediaViewContenMax960.matches === true) {

    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 3090
      })
      navEl.classList.remove("show");
    });
  
    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 5699
      })
      navEl.classList.remove("show");
    });

  }

  // max-width: 929px
  if(mediaViewContenMax920.matches === true){
  
    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 5859
      })
      navEl.classList.remove("show");
    });

  }

  // max-width: 769px
  if(mediaViewContenMax760.matches === true){

    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 3647
      })
      navEl.classList.remove("show");
    });

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 6576
      })
      navEl.classList.remove("show");
    });

  } 

  // max-width: 706px
  if(mediaViewContenMax700.matches === true){

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 6762
      })
      navEl.classList.remove("show");
    });

  } 

  // max-width: 689px
  if(mediaViewContenMax680.matches === true){

    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 3673
      })
      navEl.classList.remove("show");
    });

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 6922
      })
      navEl.classList.remove("show");
    });

  } 

  // max-width: 629px
  if(mediaViewContenMax620.matches === true){

    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 3677
      })
      navEl.classList.remove("show");
    });

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 7086
      })
      navEl.classList.remove("show");
    });


  } 
  // max-width: 560px
  if(mediaViewContenMax560.matches === true){

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 7406
      })
      navEl.classList.remove("show");
    });

  }

  // max-width: 489px
  if(mediaViewContenMax480.matches === true){

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 9006
      })
      navEl.classList.remove("show");
    });

  } 

  // max-width: 379px
  if(mediaViewContenMax370.matches === true){

    goSkill.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 3589
      })
      navEl.classList.remove("show");
    });

    goProject.addEventListener("click", function() {
      gsap.to(window, 0.6, {
        scrollTo: 8933
      })
      navEl.classList.remove("show");
    });

  } 
  

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

