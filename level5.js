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
function sumAllPrimes(nu){
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
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
let res = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log(res);
