import cards from "./data.json" assert { type: "json" };

const sections = document.querySelector(".sections");

let searchItems = [];
const allCards = [...cards];


const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>';
const buttonClickFunction = function(){

  const buttons = document.querySelectorAll(".btn");

 buttons.forEach((button) => {
  button.addEventListener("click", function handelClick() {
    if(!searchItems.includes(button.name)){
    let matchingCards = [];
    getFilterElements();
   function getFilterElements(){
    if (!searchItems.includes(button.name)) {
    searchItems.push(button.name);
    filter();
    }
} 
    const cvladi = document.querySelector(".card");
    document.getElementById("searchBar").style.display = "flex";
    cvladi.style.transition = "1s";
    // cvladi.style.marginTop = "100px";
    if(screen.width < 500 && searchItems.length >= 3){
        cvladi.style.transition = "1s";
        cvladi.style.marginTop = "200px";
    }

    const searchBoxItem = document.getElementById("searchBoxItem");
    const div = document.createElement("div");
    div.classList.add("searchItem");
    div.setAttribute("id", "itemID");
    searchBoxItem.append(div);

    const createdDiv = document.getElementById("itemID");
    const p = document.createElement("p");
    p.innerHTML = button.name;
    const newDiv = document.createElement("div");
    newDiv.classList.add("svg-border");
    newDiv.addEventListener("click", function (event) {
        const clickedDiv = event.target;
        const indexToRemove = searchItems.indexOf(button.name);
        newDiv.remove();
        searchItems.splice(indexToRemove, 1);
        console.log(searchItems);
        filter();
        clickedDiv.remove();
        p.remove();
        if (searchItems.length === 0) {
          document.getElementById("searchBar").style.display = "none";
          document.getElementById("1").style.marginTop = "50px";
          getElementsAll(allCards);
        }
      });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", function () {
      div.remove();
      searchItems = [];
      matchingCards = [];
      getElementsAll(allCards);
      document.getElementById("searchBar").style.display = "none";
      document.getElementById("1").style.marginTop = "50px";
    });
    newDiv.innerHTML = svg;

    createdDiv.append(p);
    createdDiv.append(newDiv);
}
  });
});

}

function filter(){
    let matchingCards = [];
    let filteredCards = cards;
    for (let i = 0; i < searchItems.length; i++) {
      const languagesData = filteredCards.filter((card) =>
        card.languages.includes(searchItems[i])
      );
      const toolsData = filteredCards.filter((card) =>
        card.tools.includes(searchItems[i])
      );
      const roleData = filteredCards.filter((card) =>
        card.role.includes(searchItems[i])
      );
      const levelData = filteredCards.filter((card)=>
      card.level.includes(searchItems[i])
      );
      filteredCards = languagesData.concat(toolsData, roleData, levelData);
    }
    matchingCards = filteredCards;
    console.log("clicked");
    getElementsAll(matchingCards);
}
getElementsAll(allCards);

function getElementsAll(array) {
  sections.innerHTML = "";

  array.map((card) => {
    
    
      const createCardDiv = document.createElement("div");
      createCardDiv.setAttribute("id", card.id);
      createCardDiv.classList.add("card");
      sections.appendChild(createCardDiv);
      const createRectangelDiv = document.createElement("div");
      createRectangelDiv.classList.add("rectangel");
      createCardDiv.appendChild(createRectangelDiv);

      const img = document.createElement("img");
      img.setAttribute("src", card.logo);
      createCardDiv.appendChild(img);

      const createSectionHeaderDiv = document.createElement("div");
      createSectionHeaderDiv.setAttribute("class", "section-header");
      createCardDiv.appendChild(createSectionHeaderDiv);

      const createCompanyName = document.createElement("p");
      createCompanyName.classList.add("company-name");
      createCompanyName.setAttribute("id", "name");
      createCompanyName.textContent = card.company;
      createSectionHeaderDiv.appendChild(createCompanyName);

      if (card.featured == true || card.new == true) {
        const createItemsDiv = document.createElement("div");
        createItemsDiv.classList.add("items");
        createSectionHeaderDiv.appendChild(createItemsDiv);

        if (card.new == true) {
          const newP = document.createElement("p");
          newP.classList.add("new");
          newP.textContent = "NEW!";
          createItemsDiv.appendChild(newP);
        }

        if (card.featured == true) {
          const newP = document.createElement("p");
          newP.classList.add("featured");
          newP.textContent = "FEATURED";
          createItemsDiv.appendChild(newP);
        }
      }

      const newP = document.createElement("p");
      newP.classList.add("job");
      newP.textContent = card.position;
      createSectionHeaderDiv.appendChild(newP);

      const createInfoDiv = document.createElement("div");
      createInfoDiv.classList.add("info");
      createSectionHeaderDiv.appendChild(createInfoDiv);

      const pForInfo = document.createElement("p");
      pForInfo.textContent = card.postedAt;
      createInfoDiv.appendChild(pForInfo);

      const spanForP = document.createElement("span");
      spanForP.classList.add("dot");
      createInfoDiv.appendChild(spanForP);

      const pForInfo1 = document.createElement("p");
      pForInfo1.textContent = card.contract;
      createInfoDiv.appendChild(pForInfo1);

      const spanForP1 = document.createElement("span");
      spanForP1.classList.add("dot");
      createInfoDiv.appendChild(spanForP1);

      const pForInfo2 = document.createElement("p");
      pForInfo2.textContent = card.location;
      createInfoDiv.appendChild(pForInfo2);

      const mobileHr = document.createElement("hr");

      function checkScreenSize() {
        if (window.matchMedia("(min-width: 375px)").matches) {
          createCardDiv.appendChild(mobileHr);
        } else {
          if (mobileHr.parentNode) {
            mobileHr.parentNode.removeChild(mobileHr);
          }
        }
      }

      window.addEventListener("load", checkScreenSize);
      window.addEventListener("resize", checkScreenSize);

      const createDivForTags = document.createElement("div");
      createDivForTags.classList.add("tags");
      createCardDiv.appendChild(createDivForTags);

      const btnForRole = document.createElement("button");
      btnForRole.setAttribute("name", card.role);
      btnForRole.classList.add("btn");
      btnForRole.textContent = card.role;
      createDivForTags.appendChild(btnForRole);

      const btnForLevel = document.createElement("button");
      btnForLevel.setAttribute("name", card.level);
      btnForLevel.classList.add("btn");
      btnForLevel.textContent = card.level;
      createDivForTags.appendChild(btnForLevel);

      const languages = card.languages;
      for (let i = 0; i < languages.length; i++) {
        const createBtn = document.createElement("button");
        createBtn.setAttribute("name", languages[i]);
        createBtn.classList.add("btn");
        createBtn.textContent = languages[i];
        createDivForTags.appendChild(createBtn);
      }
      const tools = card.tools;
      for (let i = 0; i < tools.length; i++) {
        const createBtn = document.createElement("button");
        createBtn.setAttribute("name", tools[i]);
        createBtn.classList.add("btn");
        createBtn.textContent = tools[i];
        createDivForTags.appendChild(createBtn);
      }
    
  });
  buttonClickFunction();
}
