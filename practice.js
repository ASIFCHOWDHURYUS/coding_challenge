// grading students hackerrank solution in javascript
function gradingStudents(grades) {
    // Write your code here
    let gradesFinal = [];
    for(let i=0; i<grades.length; i++){
        if(grades[i]< 38){
            gradesFinal.push(grades[i]);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) < 3){
            gradesFinal.push(Math.ceil(grades[i]/5)*5);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3){
            gradesFinal.push(grades[i]);
        }
    }
    return gradesFinal;
}

// sales by match hackerrank solution javascript
function sockMerchant(n, ar) {
    // Write your code here
    const uniqueValues = [... new Set(ar)]
    let count = 0
    uniqueValues.forEach(value => {
        const filterValues = ar.filter(element => element == value)
        const pairsNumber = Math.floor(filterValues.length/2)
        count += pairsNumber
    })
    return count
}

// counting valleys
function countingValleys(steps, path) {
    // Write your code here

    let strArr = path.split('')
    let count = 0
    let result = 0
    for(let step=0; step<steps; step++){
        if(count == 0 && strArr[step].toLowerCase() == 'd'){
            count -= 1
            result += 1
        } else if(strArr[step].toLowerCase() == 'd'){
            count -= 1
        } else {
            count += 1
        }
    }
    return result
}