var houses = ['Stark', 'Targaryen', 'Lannister', 'Martell', 'Baratheon', 'Bolton', 'Tyrell'];

// TODO: change the array to a Set


/* TODO: Implement your own version of a Map without using the actual Map
 * You need following functions:
 * set(key, value)   --> stores the value under the given map
 * get(key) --> get the value of the given key
 * delete(key) --> remove the given key from the map
 * get size() --> Get the amount of keys stored in the map
 * clear() --> remove all keys from the map
 */

class MyMap {
    // Your code here
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
