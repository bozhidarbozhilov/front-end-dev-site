const navBar=document.getElementsByTagName("nav")[0];
const burgerMenu=document.querySelectorAll(".site-navbar .menu-label path");
const siteContent=document.getElementsByClassName("site-content")[0];
const menuBtn=document.getElementById("menu-btn");


menuBtn.addEventListener("change",(e)=>{
    if(menuBtn.checked==true){
       disableScroll();
    }else{
        enableScroll();
    }
})

window.onscroll = (e)=>{

    if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100){
        navBar.classList.add("site-navbar--scrolled");
        burgerMenu.forEach(path=>{
            path.classList.add("scrolled");
        });
        
    }else{
        navBar.classList.remove("site-navbar--scrolled");
        burgerMenu.forEach(path=>{
            path.classList.remove("scrolled");
        });
    }
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  var preventKeys = {
    37: 1, 38: 1, 39: 1, 40: 1
  };

  function preventDefaultForScrollKeys(e) {
    if (preventKeys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function disableScroll() {
    let target=document.getElementsByClassName("site-content")[0];
    if (window.addEventListener) // older FF
      target.addEventListener('DOMMouseScroll', preventDefault, false);
    target.onwheel = preventDefault; // modern standard
    target.onmousewheel = target.onmousewheel = preventDefault; // older browsers, IE
    target.ontouchmove = preventDefault; // mobile
    target.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    let target=document.getElementsByClassName("site-content")[0];
    if (window.removeEventListener)
      target.removeEventListener('DOMMouseScroll', preventDefault, false);
    target.onmousewheel = target.onmousewheel = null;
    target.onwheel = null;
    target.ontouchmove = null;
    target.onkeydown = null;
  }


