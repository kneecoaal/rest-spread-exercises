//findMin - write a function called findMin that accepts a variable number of arguments and returns the smallest argument

function findMin(...allArgs) {
  return Math.min(...allArgs);
}

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
