// percentageOfWorld1
function percentageOfWorld1(population) {
  const worldPopulation = 7900000000;
  return (population * 100) / worldPopulation;
}

const china = percentageOfWorld1(1411778724).toFixed(2);
const india = percentageOfWorld1(1384048264).toFixed(2);
const israel = percentageOfWorld1(8655535).toFixed(2);

console.log(
  "\nchina:" + china + "% india:" + india + "% israel:" + israel + "%"
);

// percentageOfWorld2
const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900000000;
  return (population * 100) / worldPopulation;
};

const china2 = percentageOfWorld2(1411778724).toFixed(2);
const india2 = percentageOfWorld2(1384048264).toFixed(2);
const israel2 = percentageOfWorld2(8655535).toFixed(2);

console.log(
  "\nchina2:" + china + "% india:" + india + "% israel:" + israel + "%\n"
);
