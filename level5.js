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