
const getFibonacciSequence = (startNum, numLength) => {
    //guard clause - error handler for parameters with no value
    if (startNum == null || numLength == null) {
        return "";
    }

    //get fibonacci sequence
    let sequence = [startNum, startNum == 0 ? 1 : startNum];
    for (let i = 0; i < numLength - 2; i++) {
        let result = sequence[i] + sequence[i + 1];
        sequence.push(result);
    }
    
    //final output
    return `Start Number: ${startNum} \nLength: ${numLength} \nOutput: ${sequence.join(" ")} \n`;
}

//print result
console.log(getFibonacciSequence(3, 5));
