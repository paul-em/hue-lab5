class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    get elements() {
        var c = 0;
        this.forEach(function(item){
            if(item !== null){
                c++;
            }
        });
        return c;
    }
}

var arr = new MyArray(1, 2, 3, 4);
console.log(`${arr.elements} should be 4`, arr.elements === 4);
arr[2] = null;
console.log(`${arr.elements} should be 3`, arr.elements === 3);