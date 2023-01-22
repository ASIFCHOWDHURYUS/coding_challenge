//1.Conditional Statements: If-Else

function getGrade(score) {
    let grade;
    if(25 <score && score <= 30){
        grade = 'A';
    }
    if(20 <score && score <= 25){
        grade = 'B';
    }
    if(15 <score && score <= 20){
        grade = 'C';
    }
    if(10 <score && score <= 15){
        grade = 'D';
    }
    if(5 <score && score <= 10){
        grade = 'E';
    }
    if(0 <= score && score <= 5){
        grade = 'F';
    }
    
    return grade;
}

let output = getGrade(30);
console.log(output);

// 2. Simple Array Sum

function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum = sum + ar[i];
        
    } 
    return sum;
}
let arsum = simpleArraySum([1, 2, 3, 4, 10, 11])
console.log(arsum);

// 3. Arrays
function getSecondLargest(nums) {
    let largest = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
     let secondLargest = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
let getsecond =getSecondLargest([6, 7, 4, 9, 80])
console.log(getsecond);

// 4. loops
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
//  const stringArray = s.split('');
for(let i=0; i < s.length; i++){
   for(let j=0; j < vowels.length; j++){
     if(s[i] == vowels[j]){
       console.log(s[i]);
     }
   }
 }
const consonent = 'bcdfghjklmnpqrstvwxyz'.split('');
for(let i=0; i < s.length; i++){
   for(let j=0; j < consonent.length; j++){
     if(s[i] == consonent[j]){
       console.log(s[i]);
     }
   }
 }
   
}
 let select = vowelsAndConsonants(['a', 'b', 'c', 'd', 'e']);
 console.log(select);