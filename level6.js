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

 // 5. Multiples of 3 and 5
 function sumOf3or5(num) {
    let sum = 0;
    for (let i = 3; i < num; i ++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }

    }
    return sum;
 }
 let multiple = sumOf3or5(5);
 console.log(multiple);

 // 6. sherLock and Array
 function balancedSums(arr) {
    if (arr.length === 1) return "YES";
    let leftSum, rightSum;
    const total = arr.reduce((sum, value) => sum +
    value, 0);
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) leftSum = 0;
        else leftSum += arr[i - 1];
        if (i === arr.length - 1) rightSum = 0;
        else rightSum = total - leftSum - arr[i];
        if (leftSum === rightSum) return "YES";
}
return "NO"
 }
 let sherlock =balancedSums([1, 1, 4, 1, 1]);
 console.log(sherlock);

 // 7. count object
 function getCount(objects) {
    let count = 0;
    for( let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y){
            count++
        }
    }
    return count;
 }
 let number = getCount([2, 3]);
 console.log(number);

 // 8. missing NuMbEr
function missingNumbers(arr, brr) {
    let key = 0;
    let out=[];
    let hash={};
    
       for (let i=0; i < brr.length; ++i) { 
           let key = brr[i];
           hash[key] = 0;
           console.log(key,hash[key])
      }
    
      for (let i=0; i < brr.length; ++i) {
            let key = brr[i];
            hash[key] += 1; 
      }
     
      for (let i=0;i < arr.length; ++i) { 
           let key = arr[i];
           hash[key] -= 1;
            console.log(hash[key]);
     }
    
    
    for (let e in hash) {  
         if (hash[e] > 0 ) {
           out.push(e);
          {
    }
    return (out);
    } }
     }
     let mn = missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]);
     console.log(mn);