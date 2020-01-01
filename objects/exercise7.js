// exercise7.js

let copyObj = (obj, array = false) => {
  if (array) {
    let newObj = {};
    array.forEach(key => {
      newObj[key] = obj[key];
    });
    return newObj;
  } else {
    return Object.create(obj);
  }
};

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined