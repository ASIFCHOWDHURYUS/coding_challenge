// Convert Celsius to Fahrenheit (freeCodeCamp):
function convertToF(celsius) {
    let fahrenheit= celsius * 9 / 5 + 32;
  return fahrenheit;
  }
  let cel = convertToF(30);
  console.log(cel);
  
  // Reverse a String (freeCodeCamp):
  
  function reverseString(str) {
    let output = '';
  for (let i = str.length - 1; i >= 0; i --) {
      output += str[i];
    }
   return output;
  };
  
  // Factorialize a Number (freeCodeCamp):
  function factorial(n){
    let a = [];
    let counter = 0;
    for(let i = n; i > 1; i --){
      a[counter] = i;
      counter ++;
    }
  
    let product = 1;
   for (let j = 0; j < a.length; j++) {
    product = a[j] * product;
    }
    return product;
  }
  
  // Truncate a String (freeCodeCamp):
  function truncateString(str, num) {
    if (num < str.length ) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
  
  // Where do I Belong (freeCodeCamp):
  
  function getIndexToIns(arr, num) {
    arr.sort(function(a,b) {
      return a - b;
    });
  
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
  
  
    return arr.length;
  };
  
  
  getIndexToIns([40, 60], 50);
  
  
  
  
  
  // Chunky Monkey (freeCodeCamp):
  function chunkArrayInGroups(arr, size) {
    let result=[];
  
  
    for (let i = 0; i < arr.length; i += size){
      result.push(arr.slice(i, i + size));
    }
  
  
    return result;
  };
  
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
  // Sum of all odd length subarrays (leetCode):
  // Apple and Orange (hackeRrank):
  function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let positionA = [];
    let positionO = [];
    let counterA = 0;
    let counterO = 0;
  
  
    for (let i = 0; i < apples.length; i ++) {
      positionA[i] = apples[i] + a;
    }
  
  
    for (let i = 0; i < oranges.length; i ++) {
      positionO[i] = oranges[i] + b;
    }
  
  
    for (let i = 0; i < positionA.length; i ++) {
      if(positionA[i] >= s&&positionA[i]<=t){
        counterA ++
      }
    }
    for(let i = 0; i < positionO.length; i ++) {
      if(positionO[i] >= s && positionO[i] <= t) {
        counterO++
      }
    }
  
  
    console.log(counterA);
    console.log(counterO);
  }
  // Count odd numbers in an interval range (leetCode):
  //  Sum All Numbers in a Range (freeCodeCamp):
  function sumAll(arr) {
    arr = arr.sort((a, b) => a - b);
    let sum=0;
  
  
    for(let i = arr[0]; i <= arr[1]; i ++) {
      sum=i+sum
    }
  
  
    return sum;
  };
  
  
  sumAll([1, 4]);
  
  // Seek and Destroy (freeCodeCamp):
  function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < valsToRemove.length; j ++) {
        if (arr[i] === valsToRemove[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(item => item !== null);
  };
  
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  // Pig Latin (freeCodeCamp):
  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
  
  
    return myConsonants !== null ? str.replace(consonantRegex,"").concat(myConsonants).concat("a") : str.concat("way");
    };
  
  
  translatePigLatin ("consonant")
  
  // Plus Minus (HackerRank):
  function plusMinus(arr) {
    // Write your code here
    let outputP = 0;
    let outputN = 0;
    let outputZ = 0;
  
  
    for(let i = 0; i < arr.length; i ++) {
      if(arr[i]>0) {
        outputP ++;
    } else if (arr[i] < 0) {
      outputN++
    } else if (arr[i] === 0) {
      outputZ++
    }
  };
  
  
  const resultP = outputP / arr.length;
  const resultN = outputN / arr.length;
  const resultZ= outputZ / arr.length;
  
  
  console.log(resultP.toFixed(6));
  console.log(resultN.toFixed(6));
  console.log(resultZ.toFixed(6));
  }
  
  // Staircase (HackerRank):
  function staircase(n) {
    for (let i = 1; i <= n; i ++) {
      console.log(''.repeat(n - i) + '#'.repeat(i));
    }
  }
  
  // Birthday Cake Candles (HackerRank):
  function birthdayCakeCandles(candles) {
    let max = candles[0];
    let counter=0;
  
  
    for (let i = 0; i < candles.length; i ++) {
      if (candles[i] > max) {
        max = candles[i];
      }
    }
  
  
    for (let i = 0; i < candles.length; i ++) {
      if (candles[i] === max) {
        counter++;
      }
    }
  
  
    return counter;
  };
  
  // Breaking the Records (HackerRank):
  function breakingRecords(scores) {
    let high = scores[0];
    let low = scores[0];
    let [ max, min ] = [ 0, 0 ];
  
  
    for (let i = 1; i < scores.length; i ++) {
      if (scores[i] > high) {
        high = scores[i]; max++;
      }
  
  
      if (scores[i] < low) {
        low = scores[i]; min++;
      }
    }
  };
  
  // Bon Appétit (HackerRank):
  function bonAppetit(bill, k, b) {
    bill.splice(k,1);
    let sum = 0;
  
  
    for(let i = 0; i < bill.length; i ++) {
      sum = bill[i] + sum;
    }
  
  
    let division = sum / 2;
  
  
    if(division === b){
      console.log("Bon Appetit")
    } else {
      console.log( b - division);
    }
  };
  
  // Cats and a Mouse (HackerRank):
  function catAndMouse(x, y, z) {
    let diffx = Math.abs(z-x);
    let diffy = Math.abs(z-y);
  
  
    if(diffx === diffy) {
      return 'Mouse C';
    } else {
      if(diffx < diffy) {
        return 'Cat A';
      } else {
        return 'Cat B';
      }
    }
  };
  // Cats and a Mouse (HackerRank):
  function catAndMouse(x, y, z) {
    let diffx = Math.abs(z-x);
    let diffy = Math.abs(z-y);
  
  
    if(diffx === diffy) {
      return 'Mouse C';
    } else {
      if(diffx < diffy) {
        return 'Cat A';
      } else {
        return 'Cat B';
      }
    }
  };
  
  // The Hurdle Race (HackerRank):
  function hurdleRace(k, height) {
    let x = height.sort((a, b) => a - b).pop();
      if((x - k) > 0){
        return x - k;
      } else {
        return 0;
      }
    }
  ;