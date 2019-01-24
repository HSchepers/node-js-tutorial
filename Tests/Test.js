console.log(maxDivider(20));

function maxDivider(value) {
    let highDivider = 0;
    let highValue = 0;

    for (let i = 1; i <= value; i++) {
        let numDivider = countDivider(i);
        if (highDivider < numDivider) {
            highDivider = numDivider;
            highValue = i;
        }
    }

    return {
        value: highValue,
        divider: highDivider
    };
}

function countDivider(value) {
    var numDivider = 2;
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            numDivider++;
        }
    }
    return numDivider;
}

