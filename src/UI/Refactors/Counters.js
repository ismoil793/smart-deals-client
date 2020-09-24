export function countTotalPrice(products) {
   let total = 0;

   products.forEach((p) => {
      total += p.total_price;
   });
   return total;
}


export function countTotalQuantity(products) {
   let total = 0;

   products.forEach((p) => {
      total += p.pack_quantity;
   });
   return total;
}