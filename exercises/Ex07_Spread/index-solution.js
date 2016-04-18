function inc(number, increment = getDefault()) {
    return number + increment;
}

function getDefault(){
    return 1;
}

console.log(inc(2, 2)); // 4
console.log(inc(2));    // 3