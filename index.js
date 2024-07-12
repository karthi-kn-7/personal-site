// alert("hi");
var cyear=new Date().getFullYear();
document.getElementById("fffpad").textContent="Copyright "+"\xa9 "+cyear+" Karthikeyan S. All Rights Reserved.";
window.onload = function() {
    // Entire page including all resources is loaded
    $(".mdiv").toggle();
};

$(".navbtn").click(function (e) { 
    
    // alert("DF");
    $(".mdiv").slideToggle();
});

$(".ma").click((e)=>{
    $(".mdiv").slideToggle();
});
