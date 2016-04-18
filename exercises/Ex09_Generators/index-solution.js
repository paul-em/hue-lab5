
let evenNums = {
    [Symbol.iterator]: function*() {
        var cur = 0;
        for (; ;) {
            cur += 2;
            if(cur > 20){
                return;
            }
            yield cur;
        }
    }
};

for(var n of evenNums){
    console.log(n);
}

