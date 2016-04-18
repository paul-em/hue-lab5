var houses = new Set(['Stark', 'Targaryen', 'Lannister', 'Martell', 'Baratheon', 'Bolton', 'Tyrell']);

class MyMap {
    // Your code here
    constructor(){
        this._map = [];
    }
    set(key, value){
        let found = this._map.some(function(item, index){
            if(item.key === key){
                this._map[index].value = value;
                return true;
            }
        });
        if(!found){
            this._map.push({key: key, value: value});
        }
    }
    get(key){
        var result = this._map.find(function(item){
            if(item.key === key){
                return true;
            }
        });
        if(result){
            return result.value;
        }
    }
    delete(key){
        var self = this;
        this._map.some(function(item, index){
            if(item.key === key){
                self._map.splice(index, 1);
            }
        })
    }
    get size(){
        return this._map.length;
    }
    clear(){
        this._map = [];
    }
}


const names = new MyMap;
names.set(Array, "the array constructor");
names.set(Math, "the math object");
console.log(names.get(Array));
// ? "the array constructor"
console.log(names.size);
// ? 2
names.delete(Array);
console.log(names.get(Array));
// ? undefined
names.clear();
console.log(names.get(Math));
// ? undefined
