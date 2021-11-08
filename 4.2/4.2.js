function numbers(num) {
  if (num < 64 && 0 < num) return "F";
  else if (num < 69) return "D";
  else if (num < 79) return "C";
  else if (num < 89) return "B";
  else if (num <= 100) return "A";
  return;
}

console.log(numbers(55));