function inc(number, increment) {
    // set default to 1 if increment not passed
    // (or passed as undefined)
    increment = increment || 1;
    return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2));    // 3


// TODO remove line 4 (increment = increment || 1) and instead use a default value on the increment argument.
// This default value should be produced by another function that simply returns 1