
var header=document.querySelector("#WelcomeP h4");
var userName = sessionStorage.getItem('userName');
header.appendChild(document.createTextNode (" "+userName));



var reponsiveNavBtn = document.querySelector(".parent");
var UlNavResponsive = document.querySelector(".UlNavResponsive");

reponsiveNavBtn.addEventListener("click" , function(){

    UlNavResponsive.classList.toggle("myStyle");
})





