const getNumber = prompt("Введите число", 25);

let number = 0;

const isNumber = function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};

number = isNumber(getNumber) ? +(getNumber + "").trim() : number;

console.log(number);