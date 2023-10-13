const first100Price = 100;
const second100Price = 90;
const Third100Price = 70;
function totalDiscuntPrice  (TicketQuantity ){

    if(TicketQuantity < 100){
        const firstPrice = TicketQuantity * first100Price;
        return firstPrice;
    }
    else if (TicketQuantity <=200){
        const firstPrice = TicketQuantity * first100Price;
        const restQuantity = TicketQuantity -100;
        const secondPrice = restQuantity *second100Price; 
        const secondTotal = firstPrice +secondPrice;
        return secondTotal;
    }else{
        const firstPrice = 100 * first100Price;
        const secondPrice = 100 *second100Price;
        const restTicketPrice = TicketQuantity - 200;
        const thirdPrice = restTicketPrice *Third100Price;
        const thirdTotal = firstPrice + secondPrice + thirdPrice;
        return thirdTotal;
    }
}

const totalPrice = totalDiscuntPrice(300)
console.log(totalPrice);