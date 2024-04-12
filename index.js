//Details about all the planets:
var planets = [
  {
    name: "Mercury",
    class: "mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
    hasLife: false,
    majorMoons: [],
    atmosphere: [],
    url: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg",
  },
  {
    name: "Venus",
    class: "venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
    hasLife: false,
    majorMoons: [],
    atmosphere: ["Carbon Dioxide"],
    url: "https://en.wikipedia.org/wiki/Venus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg",
  },
  {
    name: "Earth",
    class: "earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
    hasLife: true,
    majorMoons: ["The moon"],
    atmosphere: ["Nitrogen", "Oxygen"],
    url: "https://en.wikipedia.org/wiki/Earth",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  },
  {
    name: "Mars",
    class: "mars",
    circumference: "227,000,000km",
    distanceFromSun: "21,000km",
    hasLife: false,
    majorMoons: ["Phobos", "Deimos"],
    atmosphere: ["Carbon Dioxide"],
    url: "https://en.wikipedia.org/wiki/Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  },
  {
    name: "Jupiter",
    class: "jupiter",
    circumference: "779,000,000km",
    distanceFromSun: "440,000km",
    hasLife: false,
    majorMoons: ["Io", "Europa", "Ganymede", "Calisto"],
    atmosphere: ["Hydrogen", "Helium"],
    url: "https://en.wikipedia.org/wiki/Jupiter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  },
  {
    name: "Saturn",
    class: "saturn",
    circumference: "1,430,000,000km",
    distanceFromSun: "365,000km",
    hasLife: false,
    majorMoons: ["Titan"],
    atmosphere: ["Hydrogen", "Helium"],
    url: "https://en.wikipedia.org/wiki/Saturn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  },
  {
    name: "Uranus",
    class: "uranus",
    circumference: "2,880,000,000km",
    distanceFromSun: "160,000km",
    hasLife: false,
    majorMoons: ["Puck", "Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    atmosphere: ["Hydrogen", "Helium"],
    url: "https://en.wikipedia.org/wiki/Uranus",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  },
  {
    name: "Neptune",
    class: "neptune",
    circumference: "4,500,000,000km",
    distanceFromSun: "154,000km",
    hasLife: false,
    majorMoons: ["Triton"],
    atmosphere: ["Hydrogen", "Helium"],
    url: "https://en.wikipedia.org/wiki/Neptune",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
  },
];

function addPlanetToPage(planet) {
  // create a div element for the planet
  var planetElement = document.createElement("div");
  planetElement.classList.add("planet");
  planetElement.classList.add("planet-" + planet.name);

  // add the planet name
  var planetName = document.createElement("p");
  planetName.classList.add("planet-name");
  planetName.textContent = planet.name;
  planetElement.appendChild(planetName);

  // add other planet details
  var planetCircumference = document.createElement("p");
  planetCircumference.classList.add("planet-circumference");
  planetCircumference.textContent = "Circumference: " + planet.circumference;
  planetElement.appendChild(planetCircumference);

  // add planet distance from the sun
  var planetDistanceFromSun = document.createElement("p");
  planetDistanceFromSun.classList.add("planet-distance");
  planetDistanceFromSun.textContent =
    "Distance from the sun: " + planet.distanceFromSun;
  planetElement.appendChild(planetDistanceFromSun);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);

  // THIS EXTRA DETAIL MADE BUTTON WORK -- Major moons
  var planetMajorMoons = document.createElement("p");
  planetMajorMoons.classList.add("planet-major-moons");
  if (planet.majorMoons.length > 0) {
    planetMajorMoons.textContent =
      "Major Moons: " + planet.majorMoons.join(", ");
  } else {
    planetMajorMoons.textContent = "No moons";
  }
  planetElement.appendChild(planetMajorMoons);

  // THIS EXTRA DETAIL MADE BUTTON WORK -- Atmosphere
  var planetAtmosphere = document.createElement("p");
  planetAtmosphere.classList.add("planet-atmosphere");
  if (planet.atmosphere.length > 0) {
    planetAtmosphere.textContent =
      "Atmosphere: " + planet.atmosphere.join(", ");
  } else {
    planetAtmosphere.textContent = "No atmosphere";
  }
  planetElement.appendChild(planetAtmosphere);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
}

planets.forEach(addPlanetToPage);

// first we add JavaScript to listen to changes in the search form
// (these changes are text being entered into the form)
var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
var searchValue = "";
var filterButtonValue = "";

// check what search term has been entered
function updateSearchValue() {
  // trim() removes any spaces before/after the input
  // toLowerCase() makes the entered text lowercase
  searchValue = searchInput.value.trim().toLowerCase();
  // loop through all planet elements
  // show or hide each one based on the search term
  var planetElements = document.querySelectorAll(".planet");
  planetElements.forEach(showOrHidePlanet);

  console.log("You searched for: " + searchValue);
}

// now create a function to show or hide each planet:
function showOrHidePlanet(planetElement) {
  // if no search value is set, show every planet:
  if (searchValue.length === 0) {
    planetElement.classList.remove("hide");
    // if a search term has been set,
    // only display the planet if its name matches the search term:
  } else {
    // get the name of the planet from its planet-name element:
    var planetName = planetElement
      .querySelector(".planet-name")
      .textContent.toLowerCase();
    if (planetName.includes(searchValue)) {
      planetElement.classList.remove("hide");
    } else {
      planetElement.classList.add("hide");
    }
  }
}

// -- BUTTONS SECTION -- //

// 1) add a listener to the buttons -- iterates over each element and calls listener function for each
var planetButtonElements = document.querySelectorAll(".atmosphere-button");
planetButtonElements.forEach(addPlanetButtonListener);

// defines function that adds click event listener to planetButtonElement:
function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

// defines function that executes when button is clicked:
function planetButtonClick(event) {
  var clickedButton = event.currentTarget;

  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // set selected state for clicked button
  clickedButton.classList.add("currently-selected-button");

  // if we have clicked the 'All' button, all filters are removed
  if (clickedButton.textContent === "All") {
    filterButtonValue = "";
    // we have selected one of the atmosphere buttons, so use it in the filter
  } else {
    filterButtonValue = clickedButton.textContent.toLowerCase();
  }

  // once the filter value is updated, filter the content
  showHidePlanets();
}

function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}

function showHidePlanets() {
  var planetElements = document.querySelectorAll(".planet");
  planetElements.forEach(showHidePlanet);
}

function showHidePlanet(planetElement) {
  var planetName = planetElement
    .querySelector(".planet-name")
    .textContent.toLowerCase();
  var planetMoons = planetElement
    .querySelector(".planet-major-moons")
    .textContent.toLowerCase();
  var planetAtmosphere = planetElement
    .querySelector(".planet-atmosphere")
    .textContent.toLowerCase();

  if (
    (planetName.includes(searchValue) || planetMoons.includes(searchValue)) &&
    planetAtmosphere.includes(filterButtonValue)
  ) {
    planetElement.classList.remove("hide");
  } else {
    planetElement.classList.add("hide");
  }
}
