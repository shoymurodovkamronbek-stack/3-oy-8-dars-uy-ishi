const visitors = [101, 102, 103, 101, 104, 102, 105, 103, 106, 101];

const uniqueVisitors = new Set(visitors);
console.log("Unique visitor IDlar:", [...uniqueVisitors]);
console.log("Unique visitorlar soni:", uniqueVisitors.size);

const map = new Map();
for (let id of visitors) {
  map.set(id, (map.get(id) || 0) + 1);
}

const repeatVisitors = [];
const singleVisitors = [];
let topVisitor = null;
let maxCount = 0;

for (let [id, count] of map) {
  if (count > 1) repeatVisitors.push(id);
  if (count === 1) singleVisitors.push(id);
  if (count > maxCount) {
    maxCount = count;
    topVisitor = id;
  }
}

console.log("Bir martadan ko'p kirganlar:", repeatVisitors);
console.log("Faqat 1 marta kirganlar:", singleVisitors);
console.log(`Eng ko'p kirgan visitor: ID ${topVisitor} (${maxCount} marta)`);