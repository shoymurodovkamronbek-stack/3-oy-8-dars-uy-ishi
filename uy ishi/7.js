const text = "javascript";

const uniqueChars = new Set();
for (let char of text.toLowerCase()) {
  uniqueChars.add(char);
}
console.log("Unique belgilar:", [...uniqueChars].join(", "));
console.log("Unique belgilar soni:", uniqueChars.size);

function getFirstDuplicate(str) {
  const seen = new Set();
  for (let char of str.toLowerCase()) {
    if (seen.has(char)) return char;
    seen.add(char);
  }
  return null;
}
console.log("Birinchi takrorlangan belgi:", getFirstDuplicate(text));