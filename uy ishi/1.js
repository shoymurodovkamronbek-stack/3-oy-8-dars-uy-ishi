const products = [
    { id: 1, name: "iPhone 15", category: "phone", price: 900, quantity: 5 },
    { id: 2, name: "Samsung S24", category: "phone", price: 800, quantity: 3 },
    { id: 3, name: "MacBook Air", category: "laptop", price: 1200, quantity: 2 },
    { id: 4, name: "Lenovo ThinkPad", category: "laptop", price: 1000, quantity: 4 },
    { id: 5, name: "AirPods", category: "accessory", price: 200, quantity: 10 }
];

const productMap = new Map();
for (const product of products) {
    productMap.set(product.id, product);
}
console.log(productMap.get(3));


const categoryCount = new Map();
for (const product of products) {
    const category = product.category;
    if (categoryCount.has(category)) {
        categoryCount.set(category, categoryCount.get(category) + 1);
    } else {
        categoryCount.set(category, 1);
    }
}
console.log(categoryCount);


const categoryTotal = new Map();
for (const product of products) {
    const category = product.category;
    const total = product.price * product.quantity;
    if (categoryTotal.has(category)) {
        categoryTotal.set(category, categoryTotal.get(category) + total);
    } else {
        categoryTotal.set(category, total);
    }
}
console.log(categoryTotal);


let maxCategory = "";
let maxValue = 0;
for (const [category, total] of categoryTotal) {
    if (total > maxValue) {
        maxValue = total;
        maxCategory = category;
    }
}
console.log(maxCategory, maxValue);


const categoryProducts = new Map();

for (const product of products) {
    const category = product.category;

    if (!categoryProducts.has(category)) {
        categoryProducts.set(category, []);
    }

    categoryProducts.get(category).push(product);
}

console.log(categoryProducts);