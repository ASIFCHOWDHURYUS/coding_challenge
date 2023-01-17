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