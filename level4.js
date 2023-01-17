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