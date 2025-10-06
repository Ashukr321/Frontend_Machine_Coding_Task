 
 # SortProd 
 ## Core Features
 - Users can sort products by price in two ways:
     - Low to High
     - High to Low
   - Uses JavaScript’s `Array.sort()` with a compare function:
     - Low to High: `(a.price - b.price)`
     - High to Low: `(b.price - a.price)`