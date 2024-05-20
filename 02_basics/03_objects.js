// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //key -value pair. []used to define that it is a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //ways to access
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //prints the statements upto this(freeze) line
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //won't print bcoz of freeze 

JsUser.greeting = function(){ //declaring a function
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //function with your name 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());