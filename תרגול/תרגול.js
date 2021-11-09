function dnaFunc(str) {
  let myNewStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        myNewStr += "T";
        break;
      case "T":
        myNewStr += "A";
        break;
      case "C":
        myNewStr += "G";
        break;
      case "G":
        myNewStr += "C";
        break;

      default:
        break;
    }
  }
  return myNewStr;
}

console.log(dnaFunc("ATTGC"));

const arr = [19, 5, 42, 2, 77];

function sumOfTwoMin(arr) {
  const firstMin = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
  console.log(firstMin);
  const indexOfFirstMin = arr.indexOf(firstMin);
  console.log(indexOfFirstMin);
  arr.splice(indexOfFirstMin, 1);
  const secondMin = Math.min(arr);
  console.log(secondMin);
  return firstMin + secondMin;
}

console.log(sumOfTwoMin(arr));
