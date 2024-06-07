# Product Processor
This JavaScript function processes an array of products according to the following requirements:

1. Filters out products that are out of stock.
2. Calculates the total value of each product in stock (price * quantity).
3. Applies a discount to the total value of products that belong to a specific category.
4. Formats and returns the final array to include only the product name, category, and the discounted total value.


## Function Description
The processProducts function takes three parameters: products (an array of product objects), discountCategory (the category to which the discount applies), and discountRate (the percentage discount to apply).

Within this function, the array of products is iterated over to filter out products that are out of stock, calculate the total value of each in-stock product, and apply a discount to products in the specified category. The final array is formatted to include only the product name, category, and discounted total value.











