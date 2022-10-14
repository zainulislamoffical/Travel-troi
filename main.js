let cookies= document.querySelector(".cookies");
let cancel= document.querySelector(".bu-cancel");
let accept= document.querySelector(".bu-accept");

cancel.addEventListener("click", function (){
    cookies.classList.remove("active");
});
accept.addEventListener("click", function (){
    cookies.classList.remove("active");
    localStorage.setItem("cookieAccepted","yes");
});

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    if(cookieAccepted !="yes"){
        cookies.classList.add("active");
    }
    cookies.classList.add("active");
}, 2000)