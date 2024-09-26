function range(start, end) {
    let result = [];

    // Make sure the start is always less than or equal to end
    if (start > end) {
        return result; // Return empty array if start is greater than end
    }

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
