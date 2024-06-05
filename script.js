const startProcessing = () => {
  const products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      quantity: 5,
      inStock: true,
    },
    {
      name: "Phone",
      category: "Electronics",
      price: 500,
      quantity: 0,
      inStock: false,
    },
    {
      name: "Shirt",
      category: "Apparel",
      price: 20,
      quantity: 100,
      inStock: true,
    },
    {
      name: "Jeans",
      category: "Apparel",
      price: 40,
      quantity: 50,
      inStock: true,
    },
    {
      name: "TV",
      category: "Electronics",
      price: 1500,
      quantity: 3,
      inStock: true,
    },
    {
      name: "Hat",
      category: "Apparel",
      price: 15,
      quantity: 200,
      inStock: true,
    },
  ];

  const discountCategory = "Apparel";
  const discountRate = 0.1; // 10% discount


  let productsTable = "<table>";
  productsTable += "<tr><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>In Stock</th></tr>";
  
  products.forEach(product => {
    productsTable += `<tr>
                      <td>${product.name}</td>
                      <td>${product.category}</td>
                      <td>${product.price}</td>
                      <td>${product.quantity}</td>
                      <td>${product.inStock ? 'Yes' : 'No'}</td>
                    </tr>`;
  });

  productsTable += "</table>";

  document.getElementById("productsInput").innerHTML = `Products: <br>${productsTable}`;
  
  document.getElementById("productsBtn").addEventListener("click", (e) => {
    let productsOutput = processProducts(products, discountCategory, discountRate);
    document.getElementById("productsOutput").innerHTML = `Display Products Output: ${productsOutput}`;
  });
  // console.log(processProducts(products, discountCategory, discountRate));
};


const processProducts = (products, discountCategory, discountRate) => {
  totalValue = 0;
  for (i = 0; i < products.length; i++){
    let product = products[i];

  if (product.inStock === true){
    totalValue = product.price * product.quantity;
    //console.log(product.name, totalValue);
  if (discountCategory === product.category){
    let discountedTotalValue = totalValue - (totalValue*discountRate);
    //console.log(product.name, discountedTotalValue);
    console.log(product.name, product.category, discountedTotalValue);
  }
  }
  }
  
};


[
  { name: "Laptop", category: "Electronics", discountedTotalValue: "5000.00" },
  { name: "Shirt", category: "Apparel", discountedTotalValue: "1800.00" },
  { name: "Jeans", category: "Apparel", discountedTotalValue: "1800.00" },
  { name: "TV", category: "Electronics", discountedTotalValue: "4500.00" },
  { name: "Hat", category: "Apparel", discountedTotalValue: "2700.00" }
]


startProcessing();
