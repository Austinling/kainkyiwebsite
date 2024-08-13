let cross = document.getElementById("crossx");
let overlay = document.getElementById("bigdisplay");
let click = 0;
let filter = document.getElementById("filter");

filter.addEventListener("click",function(){
    overlay.classList.remove("hide");

});

cross.addEventListener("click",function(){
    overlay.classList.add("hide");
})