let num = 266219;
num += "";

const numArr = num.split("");
let multResult = 1;

for (let i = 0; i < numArr.length; i++) {
   multResult *= numArr[i];
}

console.log(multResult);

multResult **= 3;

console.log(multResult);

multResult += "";

console.log(multResult.slice(0, 2));