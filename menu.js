let element = document.getElementById("selection");
let element1 = document.getElementById("selection1");
let secondRow = document.getElementById("sr");
let secondRowI = document.getElementById("sri")
let secondRow1 = document.getElementById("sr1");
let secondRowI1 = document.getElementById("sri1")
let secondRow2 = document.getElementById("sr2");
let secondRowI2 = document.getElementById("sri2")
let secondRow3= document.getElementById("sr3");
let secondRowI3 = document.getElementById("sri3")


    
element.addEventListener("click", function () {

    element.classList.remove("topMenuSelection")
    element.classList.add("onSelect")
   
    element1.classList.remove("onSelect")
    element1.classList.add("topMenuSelection")
});

element1.addEventListener("click", function () {

    element1.classList.remove("topMenuSelection")
    element1.classList.add("onSelect")

    element.classList.remove("onSelect")
    element.classList.add("topMenuSelection")

});
const OutsideRow = [secondRow,secondRow1,secondRow2,secondRow3];
const InsideRow = [secondRowI,secondRowI1,secondRowI2,secondRowI3];

for (let i =0;i<OutsideRow.length;i++){
    for (let j =0;j<OutsideRow.length+1;j++){
        OutsideRow[i].addEventListener("click", function(){

            OutsideRow[i].classList.remove("chooseType");
            OutsideRow[i].classList.add("changeType");

            InsideRow[i].classList.remove("white");
            InsideRow[i].classList.add("red");

            OutsideRow[j].classList.remove("changeType");
            OutsideRow[j].classList.add("chooseType");

            InsideRow[j].classList.add("white");
            InsideRow[j].classList.remove("red");
        });
    };
 
}