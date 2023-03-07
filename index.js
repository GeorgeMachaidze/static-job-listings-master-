var searchItems = [];

const buttons = document.querySelectorAll(".btn")
console.log(buttons);

buttons.forEach((button)=>{
    button.addEventListener("click",function (){
       searchItems.push(button.name);
       document.getElementById("searchBar").style.display = "flex";
       document.getElementById("card").style.marginTop = "150px";

        const searchBoxItem = document.getElementById("searchBoxItem");
        const div = document.createElement("div");
        div.classList.add("searchItem");
        div.setAttribute("id","itemID");
        searchBoxItem.append(div);

        const createdDiv = document.getElementById("itemID");
        const p = document.createElement("p");
        p.innerHTML = button.name;
        createdDiv.append(p);

       console.log(searchItems)
    })
})