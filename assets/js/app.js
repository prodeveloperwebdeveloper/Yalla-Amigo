let btn = document.querySelectorAll(".filter-box div");
let foodItems = document.querySelectorAll(".food");

let btnText = "";
let foodItemNames = "";

//eventListener with all filter button
for (let x = 0; x < btn.length; x++) {
  btn[x].addEventListener("click", function () {

    btnText = this.innerText;
    
console.log(btnText);
    //loop for active filter button style
    for (let a = 0; a < btn.length; a++) {
      if (btnText === btn[a].innerText) {
        this.style.background = "var(--Pal3-color)";
        this.style.color = "var(--Pal2-color)";
      } else {
        btn[a].style.background = "transparent";
        btn[a].style.color = "var(--Pal3-color)";
      }
    }

    //fitering all food
    for (let i = 0; i < foodItems.length; i++) {
      foodItemNames = foodItems[i].classList[1];
      if (btnText === foodItemNames) {
        foodItems[i].style.display = "flex";
      } else if (btnText === "All") {
        foodItems[i].style.display = "flex";
      } else {
        foodItems[i].style.display = "none";
      }
    }
  });
}

