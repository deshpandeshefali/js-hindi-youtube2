const marvel_heros = ["thor", "Ironman", "spiderman"] //two arrays 
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // dc_heros pushing into marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // the array dc_heros will be considered as 4th element in the resultant array

// const allHeros = marvel_heros.concat(dc_heros) // concatenating marvel and ds_heros and storing them in allHeros
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spreading out each element using ...

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // provides single otr upto depth array. no worries if 3 or 4 subarrays are there inside a array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //creates a array of the elemnts