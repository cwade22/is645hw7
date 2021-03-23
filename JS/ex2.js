  
// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryElement = document.querySelector("input");
const suggestionsElement = document.getElementById("suggestions");

// Create suggestion

const createsug = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;



  // click event
  element.addEventListener("click", e => {
    // replace with the country
    countryElement.value = e.target.textContent;


    // Empty list
    suggestionsElement.innerHTML = "";
  });
  return element;
};

// change in list
countryElement.addEventListener("input", () => {
  // Empty list
  suggestionsElement.innerHTML = "";


  countryList.forEach(country => {
    // check for starting value
    if (country.startsWith(countryElement.value)) {
      // add suggestion
      suggestionsElement.appendChild(createsug(country));
    }
  });
});