// tab menu
const tabLink = document.querySelectorAll(".tab-nav a");
const tabContent = document.querySelectorAll(".tab-content .detail");

for(let i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener("click", function(e){
    e.preventDefault();
    let linkTarget = e.target.getAttribute("href");
    console.log(linkTarget);

    const tabTarget = linkTarget.replace("#", "");

    for(let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";

    for(let x = 0; x < tabLink.length; x++) {
      tabLink[x].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}
