'use strict';


let counter = 0;
for (let i = 0; i < 1000000; i++) {
  if (i.toString() === i.toString().split("").reverse().join("") &&
      i.toString(2) === i.toString(2).split("").reverse().join("")) {
    counter += i;
    console.log(counter);
  }
}

console.log(counter);
module.exports = () => {
  return true;
};
