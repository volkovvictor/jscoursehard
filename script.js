'use strict';

for (let i = 1; i <= 100; i++) {

   let isPrime = true;

      for (let j = 2; j < i; j++) {

         if (i % j === 0) {
            isPrime = false;
            break;
         }
      }

      if (isPrime && i > 1) console.log(i + ": Делители этого числа: 1 и " + i);
}