const groupA = ["Ali", "Vali", "Hasan", "Sardor", "Aziz"];
const groupB = ["Vali", "Hasan", "Jasur", "Sardor", "Bekzod"];

const setA = new Set(groupA);
const setB = new Set(groupB);

const both = groupA.filter(name => setB.has(name));
console.log("Ikkala guruhda bor:", both);

const onlyA = groupA.filter(name => !setB.has(name));
console.log("Faqat A guruhida:", onlyA);

const onlyB = groupB.filter(name => !setA.has(name));
console.log("Faqat B guruhida:", onlyB);

const all = [...new Set([...groupA, ...groupB])];
console.log("Barcha unique studentlar:", all);