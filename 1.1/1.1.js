const myStr = "Hello world";
const myNum = 1;
const myObj = {
  key1: "value1",
  key2: "value2",
};
const myBool = true;
const myNull = null;
const myUndefined = undefined;
const mySymbol = Symbol("foo");

console.log(
  typeof myStr +
    " " +
    typeof myNum +
    " " +
    typeof myObj +
    " " +
    typeof myBool +
    " " +
    typeof myUndefined +
    " " +
    typeof mySymbol
);
