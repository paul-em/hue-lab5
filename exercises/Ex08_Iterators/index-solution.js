let evenNums = {
    [Symbol.iterator]() {
        let cur = 0;
        return {
            next() {
                cur += 2;
                return { done: cur > 20, value: cur }
            }
        }
    }
};

for(var n of evenNums){
    console.log(n);
}

