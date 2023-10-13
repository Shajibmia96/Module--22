const bookOne = 100;
const bookTwo = 200;
const bookThree = 300;

function paperRequirements(quantityOne ,quantityTwo, quantityThree){
  
    const paperOne = bookOne *quantityOne;
    const paperTwo = bookTwo * quantityTwo ;
    const paperThree = bookThree *quantityThree;

    const totalPaper = paperOne + paperTwo + paperThree;
    return totalPaper;


}


// console.log(paperRequirements(0,0.5,0))


const friendsNames = ['akash','sayem','tipu','shajib','sadekur','arman','amir']


function bestFriend(names) {
  let friendName = ['akash']

  for(let i = 0; i<names.length; i++){
       let name = names[i]
       if(friendName.length <name.length){
        friendName = name
       }
  }
  return friendName;
}
// console.log(bestFriend(friendsNames))


const numbers = [-8,12,43,45,6544,75,89,55,85,85,96,43,-75,57,43,74,-11,-2,0,9]

function onlyPositiveNumber (getNumber){
       positiveNumbers=[];
     for(let i= 0 ; i<numbers.length; i++){
         let  number = getNumber[i];
           if(number >= 0){
             positiveNumbers.push(number);
           }else{
             continue
           }
     }
     return positiveNumbers;
}
console.log(onlyPositiveNumber(numbers));