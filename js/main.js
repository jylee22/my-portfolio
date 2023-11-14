// nav
const menuBtn = document.querySelector('.menubar');
const menuOpenBtn = document.querySelector('.open_menubar');
const navEl = document.querySelector('.lf_nav');
const compEl = document.querySelector('.comp');
const navItemEls = [...navEl.querySelectorAll('ul .nav_item')];

menuOpenBtn.addEventListener('click', function(){
  navEl.classList.add('show');
});

menuBtn.addEventListener('click', function(){
  navEl.classList.remove('show');
});

// nav active
navItemEls.forEach(function(navItem, idx){
  navItem.addEventListener('click',function(){
    navEl.classList.remove('show');

    navItemEls.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
    });

    navItemEls[idx].classList.add('active');
    
  });
});


// top
const topBtn = document.querySelector('.btn_top');

window.addEventListener('scroll', function(){
  if(scrollY >= 500){
    topBtn.classList.add('show');
  } else{
    topBtn.classList.remove('show');
  }
  topBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
  });
});

AOS.init();