const navBar=document.getElementsByTagName("nav")[0];

window.onscroll = (e)=>{
    if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100){
        navBar.classList.add("site-navbar--scrolled");
    }else{
        navBar.classList.remove("site-navbar--scrolled")
    }
}


