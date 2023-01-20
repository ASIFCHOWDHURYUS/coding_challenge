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
