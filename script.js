function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
