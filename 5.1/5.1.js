(function () {
  "use strict";

  function countryToLiveIn(language, isIsland, population, country) {
    if (
      language == "English" &&
      isIsland == false &&
      population < 50000000 &&
      country == "England"
    )
      return true;
    else return false;
  }

  console.log(countryToLiveIn("English", false, 30000000, "England"));
})();
