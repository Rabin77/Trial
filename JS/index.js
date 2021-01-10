let subnav = document.getElementById("scroll");

window.onscroll = function() {runMe()};

function runMe() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    subnav.classList.add("scrollme");
    
} 
else {
    subnav.classList.remove("scrollme");
}
}

//loader animation js

setTimeout (function(){
    $('.loader_bg').fadeToggle();
    
},3000);

AOS.init(
    {
        offset: 300, 
        duration: 2000,
    }
);

// mobilenavigationbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  

