const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];
// adding a new product
products.push({name:"desk", price:150, category: "Furniture"});
console.log(products);

//finding product 
let watch = products.find(product=>product.name==="Watch");
console.log(watch);

//using map to create new array of name only
let newProduct = products.map(product => product.name);
console.log(newProduct);

//get product that cost more than 100
let filterProduct = products.filter(product =>product.price > 100);
console.log(filterProduct);

//using for each to display product name and price
  products.forEach(product => 
    console.log(`Product: ${product.name}, Price: $${product.price}`));
    
 
// reduce to calculate the total cost
let totalCost =products.reduce((sum,product) => sum + product.price,0);
console.log(totalCost);
//let totalCost = products.reduce((acc, product) => acc + product.price,0);
//console.log(totalCost);


