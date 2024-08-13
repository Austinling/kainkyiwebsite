const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const chickenButton = document.getElementById("chicken");
const porkButton = document.getElementById("pork");
const fishButton = document.getElementById("fish")
const seaFoodButton = document.getElementById("seafood");
const vegButton = document.getElementById("vegetarian");
const allButton = document.getElementById("all");
let buttonName = document.getElementsByClassName("sbutton");
let chickenArray = [];
let porkArray = [];
let vegetarianArray = [];


let users = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
    const isVisible =user.name.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
})

fetch("./search.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const name = card.querySelector("[data-name]");
      const cost = card.querySelector("[data-cost]");
      const image = card.querySelector("[data-image]");   

        allButton.addEventListener("click",function(){
          card.classList.remove("hide");
        })


        chickenButton.addEventListener("click",function(){
          card.classList.remove("hide");

          let isTrue = user.type == "chicken";

          if (!isTrue){
            card.classList.toggle("hide",!isTrue);
            console.log(isTrue);
          }
        });

        porkButton.addEventListener("click",function(){
          card.classList.remove("hide");
          let isTrue = user.type == "pork";
          if (!isTrue){
            card.classList.toggle("hide",!isTrue);
            console.log(isTrue);
          }
        });

        fishButton.addEventListener("click",function(){
          card.classList.remove("hide");
          let isTrue = user.type == "fish";
          if (!isTrue){
            card.classList.toggle("hide",!isTrue);
            console.log(isTrue);
          }
        });

        seaFoodButton.addEventListener("click",function(){
          card.classList.remove("hide");
          let isTrue = user.type == "seafood";
          if (!isTrue){
            card.classList.toggle("hide",!isTrue);
            console.log(isTrue);
          }
        });

        vegButton.addEventListener("click",function(){
          card.classList.remove("hide");
          let isTrue = user.type == "vegetarian";
          if (!isTrue){
            card.classList.toggle("hide",!isTrue);
            console.log(isTrue);
          }
        });


      



    name.textContent = user.name;
    cost.textContent = user.cost;
    image.src = user.image;
    userCardContainer.append(card);
      

    return { name: user.name, cost: user.cost, image: user.image, element: card };

    })
  });




