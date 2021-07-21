const letterValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

// "Tatum" ?
const calculateWordValue = (input: string): number =>
  input
    .split("")
    .reduce((total, letter) => total + calculateLetterValue(letter), 0);

const calculateLetterValue = (input: string): number => {
  const lowerCaseInput = input.toLowerCase();
  return letterValue[lowerCaseInput] || 0;
};

document.getElementById("gameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector('[name="word"]') as HTMLInputElement;
  const word = input.value || "";
  const value = calculateWordValue(word);
  input.value = "";
  // alert(value);
  const result = document.createElement("li");
  result.innerHTML = `<strong>${word}</strong> is worth <strong>${value}</strong> points`;
  const resultContainer = document.getElementById("results");
  resultContainer.insertBefore(result, resultContainer.firstChild);
});
