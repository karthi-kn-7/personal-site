// alert("hi");
var cyear=new Date().getFullYear();
document.getElementById("fffpad").textContent="Copyright "+"\xa9 "+cyear+" Karthikeyan S. All Rights Reserved.";
window.onload = function() {
    // Entire page including all resources is loaded
    $(".fob").toggle();
};

$(".navbtn").click(function (e) { 
    
    // alert("DF");
    $(".fob").fadeToggle();
});

$(".ma").click((e)=>{
    $(".fob").fadeToggle();
});
