const startProcessing = () => {
  const products = [{
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

  products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.className = "productsInput";
      document.body.appendChild(productElement);
      productElement.innerHTML = `
    <p>Name: ${product.name}</p>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Quantity: ${product.quantity}</p>
    <p>In Stock: ${product.inStock ? 'Yes' : 'No'}</p>
    <br>
  `;
      productsInput.appendChild(productElement);
  });


      const processedProducts = processProducts(products, discountCategory, discountRate);
      const productsOutput = document.getElementById("productsOutput");
      productsOutput.innerHTML = "";

      processedProducts.forEach(product => {
          const productElement = document.createElement("div");
          productElement.className = "productsOutput";
          document.body.appendChild(productElement);
          productElement.innerHTML = `
     <p>Name: ${product.name}</p>
     <p>Category: ${product.category}</p>
     <p>Discounted Total Value: ${product.discountedTotalValue}</p>
     <br>
   `;
          productsOutput.appendChild(productElement);
      });
      console.log(processProducts(products, discountCategory, discountRate));
  };



const processProducts = (products, discountCategory, discountRate) => {
  const processedProducts = [];
  let totalValue = 0;
  let discountedTotalValue = 0;
  for (i = 0; i < products.length; i++) {
      let product = products[i];
      totalValue = product.price * product.quantity;
      if (discountCategory === product.category) {
          discountedTotalValue = totalValue - (totalValue * discountRate);
      } else {
          discountedTotalValue = totalValue;
      }
      if (product.inStock === true) {
          processedProducts.push({
              name: product.name,
              category: product.category,
              discountedTotalValue: discountedTotalValue,
          });
      }
  }

  return processedProducts;
};


startProcessing();