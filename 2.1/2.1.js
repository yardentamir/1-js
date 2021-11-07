// Answer 1
function describeCountry(country, population, capitalCity) {
  return (
    country +
    " has " +
    population +
    " people and its capital city is " +
    capitalCity
  );
}

// Answer 2
const call1 = describeCountry("Israel", "1 million", "Jerusalem");
const call2 = describeCountry("Russia", "12 million", "Moscow");
const call3 = describeCountry("China", "21 million", "Beijing");

console.log(call1);
console.log(call2);
console.log(call3);
