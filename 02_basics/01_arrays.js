const myArr = [0,1,2,3,4,5]
const myHeros = ["one","two",'three']
const myArr2 = new Array(1,2,3,4,5)

//console.log(myArr);
//console.log(myHeros);
//console.log(myArr2);

//myArr.push(10)
//myArr.pop(2)

//myArr.unshift(3)
//myArr.shift(3)

console.log(myArr.includes(8)); //used to check whether an array consist of given element or not   
console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); 