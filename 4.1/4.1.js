(function () {
  "use strict";
  const numSiblings = window.prompt("How many siblings do you have?");
  console.log(numSiblings + " siblings!");
  if (parseInt(numSiblings) === 1) console.log("More than 1 sibling");
  else console.log("No siblings");
  // == is used for comparison between two variables irrespective of the datatype of variable.
  // === is used for comparison between two variables but this will check strict type,
  // which means it will check datatype and compare two values
})();
