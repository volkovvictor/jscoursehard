'use strict';

const isString = function(str) {
   return typeof str !== "string" ? "Введена не строка" : str.trim().length > 30 ? str.trim().slice(1, 30) + "..." : str.trim();
}

console.log(isString("           йцукенгшщзхъфывапролджэячсмитьбю             "));
