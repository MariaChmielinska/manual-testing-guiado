/**
 * 
 * @param {number} price El valor total de la compra 
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento 
 */
function calculateDiscount(price) {
    let discount = 0;
    if (price >= 1000 ) {
        discount = price * 0.1;
    } else if (price > 500 && price < 1000) {
        discount = price * 0.05;
   
    }
    
    return discount;
}

console.log(calculateDiscount("100, pues 10% de 1000 es 100", 1000)); // 100, pues 10% de 1000 es 100
console.log(calculateDiscount("discount of 500 result 50", 501)); // 50, pues 5% de 501 es 50
console.log(calculateDiscount("discount of 100 result 0", 100)); // 0, pues no llegamos al mínimo para obtener un descuento
console.log(calculateDiscount("discount of 750, result 37.5",750)); // 37.5
console.log("discount of 1500 should not be combined, result 150", calculateDiscount(1500)); 
console.log(calculateDiscount("discount of 999,99 result 49.95", 999,99)); 

//Zara Online + 5€ de gastos de envío = 5€
function calculateTotal(basePrice, voucher) {

    const shippingCost = 5;
    let finalPrice = basePrice - voucher 
    finalPrice = finalPrice - calculateDiscount(finalPrice);

    finalPrice += shippingCost

    return finalPrice;

}

console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346
console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)); // 717.5
console.log("Compra de 1500€ con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)); // 1346
console.log("Compra de 1200€ con cheque de 20€ de descuento", calculateTotal(1200, 20)); // 1085
console.log("Compra de 400€ sin cheque descuento", calculateTotal(400, 0)); // 405, no tiene descuento
