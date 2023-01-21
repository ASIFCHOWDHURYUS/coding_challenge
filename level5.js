// 1.Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHtml(str) {
    let temp = str.split('')
    for(let i = 0; i < temp.length; i++){
        switch(temp[i]){
            case '<':
                temp[i] = '&lt;';
                break;
                case '&':
                    temp[i] = ' &amp;';
                    break;
                    case '>':
                        temp[i] = '&gt;';
                        break;
                        case '"':
                            temp[i] = '&quot;';
                            break;
                            case "'":
                                temp[i] = '&apos;'
                                break;

        }
    }
    temp = temp.join("");
    return temp;
}
let convert = convertHtml("tal < begun < bel")
let cont = convertHtml("tal & begun & bel");
let quotation = convertHtml('Stuff in "quotation marks"')
console.log(convert, cont, quotation);

//2.Sum All Primes
function sumAllPrimes(num){
    function isPrime(num){
        let sqrt = Math.sqrt(num);
        for (let i = 2; i <=sqrt; i++){
            if (num % i === 0)
            return false;

        }
        return true;
    }
    let sum = 0;
    for ( let i = 2; i <= num; i++){
        if(isPrime(i))
        sum += i;
    }
    return sum;
}
let ans = sumAllPrimes(977);
console.log(ans);

//3. you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
function aVeryBigSum(ar){
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}
let res = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log(res);

//5. Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//Write a program that prints a staircase of size .
function staircase(n) {
    let output = ''
     for (let i = 1; i <= n; i++) {
            for (let s = n - 1; s >= i; s--) {
                output += ' '
            }
            for (let h = 1; h <= i; h++) {
                output += '#'
            }
            output += "\n"
           }
        return output;
    }
    let vou = staircase(8);
    console.log(vou);

    //4..Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr) {
    
    let totalPos=0, totalNe=0, totalZe=0, arrLen = arr.length;
    
    for(let value of arr){
        
        switch(true){
           
           case (value > 0):
            totalPos++;
            break;
            
            case (value < 0):
            totalNe++;
            break;             
            
            case (value == 0):
            totalZe++;
            break;           
        }
        
    }
    
    console.log(`${(totalPos/arrLen).toFixed(6)} \n ${(totalNe/arrLen).toFixed(6)} \n ${(totalZe/arrLen).toFixed(6)}`);

}

let negPos = plusMinus([-4,3,-9,0,4,1]);
console.log(negPos);


// 6.You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
function birthdayCakeCandles(candles) {
    let max = Math.max(...candles)
    let count=0
    for(let i=0;i<candles.length;i++){
        if(candles[i]===max){
          count++
        }
    }
    return(count)
    }
    let getCandles = birthdayCakeCandles([1,3,2,3]);
    console.log(getCandles);

    //7.Breaking the Records
//QUESTION: Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
function breakingRecords(scores) {
    let highScore = scores[0];
    let lowScore = scores[0];
    let highCount = 0;
    let lowCount = 0;
    for(let i=1; i<scores.length; i++){
        if(scores[i] > highScore){
            highScore = scores[i];
            highCount++;
        }else if(scores[i] < lowScore){
            lowScore = scores[i];
            lowCount++;
        }
    }
    return [highCount, lowCount];
}
let scoreRecord = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
console.log(scoreRecord);

//8. Bill Division
function bonAppetit(bill, k, b) {
    const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
    annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
}
let bill = bonAppetit([3, 10, 2, 9], 1, 12)
console.log(bill);

//9.Cats and a Mouse:

function catAndMouse(x, y, z) {
    let catAPos = Math.abs(z - x);
    let catBPos = Math.abs(z - y);
    if (catAPos < catBPos) {
        return "Cat A";
    } else if (catBPos < catAPos) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
let pet = catAndMouse([1, 2, 3]);
console.log(pet);

//10.The Hurdle Race

function hurdleRace(k, heigh) {
    let maxCount = 0;
    for (let i = 0; i < heigh.length; i++) {
        if (heigh[i] > k) {
           let diff = heigh[i] - k;
            if (diff > maxCount) {
                maxCount = diff;
            }

        }
    }
    if (maxCount === 0) {
        return 0;
    }
    return maxCount;
}
  let top = hurdleRace(4, [1, 6, 3, 5, 2]);
  console.log(top);

  