const text1 = "javascript is a programming language and javascript is very popular";
const text2 = "typescript is a programming language and javascript can run in browser";

const cleanWords = str => new Set(str.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/));

const set1 = cleanWords(text1);
const set2 = cleanWords(text2);

const common = [...set1].filter(word => set2.has(word));
console.log("Umumiy so'zlar:", common);

const onlyText1 = [...set1].filter(word => !set2.has(word));
console.log("Faqat 1-matnda:", onlyText1);

const onlyText2 = [...set2].filter(word => !set1.has(word));
console.log("Faqat 2-matnda:", onlyText2);