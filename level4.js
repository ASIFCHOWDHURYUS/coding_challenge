function smallAll(arr){
    let first = arr[0];
        let last = arr[1];

        if(first > last){
            first = arr[1];
            last = arr[0];
        }

let output = 0;
for(let i = first; i <= last; i++){
    output += i
}
return output;

}
let result = smallAll([1, 4]);
console.log(result);

// challenge one : Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
  let far = convertCtoF(30);
  console.log(far);

  //   Reverse a String
function reverseString(str) {
    let output = "";
    for(let i = str.length - 1; i >= 0; i --){
      output += str[i]
    }
    return output;
  }
  
  let outcome = reverseString("hello");
  console.log(outcome);

  //   Factorize a Number
function factorize(num) {
    let product = 1;
     for (let i = 2; i <= num; i++) {
       product *= i;
     }
     return product;
   }
   
   
   let answer = factorize(5);
   console.log(answer);

   // Truncate a String
   function truncateString(str, num) {
    let output = str.substring(0, num);
    if (output.length < str.length){
      output += "...";
    }
    return output
  }
  
  let res = truncateString("A green and yellow basket", 11);
  console.log(res);

  // where do the number belong
function getIndexToIns(arr, num) {
  let belong = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < num){
      belong ++
    }
  }
  return belong;
}

let resu = getIndexToIns([40, 30, 20, 60], 50);
console.log(resu);