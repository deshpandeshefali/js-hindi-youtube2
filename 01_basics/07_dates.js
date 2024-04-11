//let myDate = new Date()
//console.log(myDate.toDateString());
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());

//let myCreatedDate = new Date(2023 , 6, 7)
/*let myCreatedDate = new Date("01-06-2024")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());
*/
/*
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now())/1000);
*/

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getTime());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
    
})