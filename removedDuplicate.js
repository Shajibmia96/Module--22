// const names = ['akash','sayem','shajib','akash','tipu','arman','shajib','sagor','akash','tipu','sagor','selim',]

// function removedDuplicate (){
//      let unique= []
//     for(let i = 0; i<names.length; i++){
//         var name = names[i]

//         if(unique.includes(name) === false){
//             unique.push(name);
//         }

//     }
//     return unique;
// }

// const uniqueFriendsName = removedDuplicate(names);
// console.log(uniqueFriendsName);




const names = ['akash','sayem','shajib','akash','tipu','arman','shajib','sagor','akash','tipu','sagor','selim', 'selim', 'amir', 'akash']

function removedDuplicate (names){
    
    let unique = [];
    for(let i = 0; i<names.length ; i++){
         Element = names[i];
         if(unique.includes(Element) === false ){
            unique.push(Element);
         }
    }
    return unique;
}
const uniqueFriendsName = removedDuplicate(names)
console.log(uniqueFriendsName);

