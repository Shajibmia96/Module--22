const phonesItem =[
{
    name:'samsung',
    camera : 12,
    color : 'black',
    price : 44000,
    storage : '32gb'

},
{
    name:'Xaomi',
    camera : 12,
    color : 'black',
    price : 32000,
    storage : '32gb'

},
{
    name:'Nokia',
    camera : 12,
    color : 'black',
    price : 32000,
    storage : '32gb'

},
{
    name:'iPhone',
    camera : 12,
    color : 'black',
    price : 102000,
    storage : '32gb'

},
{
    name:'Blackbarry',
    camera : 12,
    color : 'black',
    price : 12000,
    storage : '32gb'

},
{
    name:'oppo',
    camera : 12,
    color : 'black',
    price : 2000,
    storage : '32gb'

}

]

function getCheapestPhone(phones) {

    let cheapest = phonesItem[0];
    for(i = 0; i<phones.length; i++){
        let phone = phones[i]
        if(phone.price <cheapest.price){
           cheapest = phone;
        }
    }
    return cheapest;
    
}
console.log(getCheapestPhone(phonesItem))