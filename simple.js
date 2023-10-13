const shoppingCard = [
    { name:"shoe" , quantity : 4, price : 1030, color : 'red'},
    { name:"shirt" ,quantity : 1,  price : 1230, color : 'red'},
    { name:"pent" , quantity : 2, price : 1250, color : 'red'},
    { name:"belt" , quantity : 8, price : 230, color : 'red'},
    { name:"underGarment", quantity : 5, price : 130, color : 'red'}
]

function shoppingCost(products){
      sum = 0;
      for(let i= 0; i<products.length; i++){
         let product  =products[i]
         let productCost = product.price * product.quantity;
         sum = sum +productCost;
      }
      return sum
}
const expensive = shoppingCost(shoppingCard);
console.log(expensive); 