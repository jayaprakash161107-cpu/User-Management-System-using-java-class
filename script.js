

//         User Management System; 13.1

// class User  {
//     constructor(user,mobilenum,age){
//      this.user =user;
//      this.mobilenum = mobilenum;
//      this.age = age;
//     }

//     getUserDetails() {
//         return  `username = ${this.user},\nmobile num =${this.mobilenum},\nage = ${this.age}`;
//     }

//      isAdult() {
//         if(this.age >= 18){
//            return true;
//         }
//         else{
//            return false;
            
//         }
//      }

    
// }


// const user1 = new User("jayaprakash",9361142948,19);
// const user2 = new User("sakthivel",8765656657,21);
// const user3 = new User("kavi",657676665,20);



// const users = [user1, user2, user3]


// for(let i=0; i< users.length; i++){
//     console.log(users[i].getUserDetails());
//     console.log(`Adelt = ${users[i].isAdult()}`);
//     console.log("\n--------\n");
    
// }










//           Working with JSON Data; 13.2







// const jsonData =`[
//  {
//   "username": "Alice",
//   "mobileNum": 9876543210, 
//   "age": 25 },

//  {
//    "username": "Bob",
//     "mobileNum": 9123456780,
//     "age": 30 
//      },


//  { 
//     "username": "Charlie",
//     "mobileNum": 9001122334,
//     "age": 17 }

// ]`;

// const users = JSON.parse(jsonData)

// // console.log(users);


// for(let i=0 ; i < users.length; i++){
//     console.log(`${users[i].username} - ${users[i].mobileNum} - ${users[i].age}`);
    
// }




// const jsonout = JSON.stringify(users);


// console.log(jsonout);


