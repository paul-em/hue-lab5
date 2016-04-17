class MyArray extends Array {

}

/*
 TODO: extend the Array BuiltIn with a class called MyArray.
  As an additional feature add a getter for "elements"
   This getter should count the number of items in the array that are not null and return this number
   The statements below should be true
  */

var arr = new MyArray(1,2,3,4);
console.log(`${arr.elements} should be 4`, arr.elements === 4);
arr[2] = null;
console.log(`${arr.elements} should be 3`, arr.elements === 3);