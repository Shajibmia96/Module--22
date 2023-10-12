const myName = 'My name is Shajib Sarkar'
const age = 22;
const friendName = ['akash' , 'sayem' ,'tipu','tanvir','arman'];
const friendsAge = [45,64,75,85,86,86,3,4,78,446,99,22,11,10];
console.log(friendsAge.indexOf(85))

var friend = typeof(friend);
console.log(Array.isArray(friendName))

console.log(friendName.includes('arman'))

if(friendsAge.indexOf(99) !== -1){
     console.log('hello')
}else{
    console.log('hi')
}

let newFriendsAge = [23,42,53,53,53,2,15,77,88,21]
const totalFriendsAge = newFriendsAge.concat(friendsAge);
console.log(totalFriendsAge);