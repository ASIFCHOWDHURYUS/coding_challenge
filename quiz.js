
let foo = 22;
foo = "hello";
foo = true;

console.log(foo);

// let foo = 22;
// foo = "hello";
// foo = true;
let foo;
console.log(foo);

let test = 71 - 1_000_000;
console.log(test); 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for(let i = 0; i <array.length; i++){
   if((array[i] >3) && (array[i] < 10)){
      newArray.push(array[i]);
   }

}
console.log(newArray);

let word = "apple";
for(let i=(word.length - 1); i >= 0; i--){
    console.log("Position: " + i + ":");
    console.log("char - " + word.charAt(i));
}

console.log(word);


let x = 0;
for (let n = 0; n < 3; n++){
         x = x +n;
} 
console.log(x);

function sum (x, y) {
    return x + y;
}
let num = sum( 2, 3);
console.log(num);