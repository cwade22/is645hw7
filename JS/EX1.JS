// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
// <option> tag
const createOptionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

//  <li> tag
const createLiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};


const houseEl = document.querySelector("select");

// house list
houses.forEach(house => {
  houseEl.appendChild(createOptionElement(house.name, house.code));
});

// user selects a new house in the list.
houseEl.addEventListener("change", e => {
  
  const char = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");


  // Empty  list
  characterElement.innerHTML = "";

  // display 
  char.forEach(character => {
    characterElement.appendChild(createLiElement(character));
  });
});