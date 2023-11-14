'use strict';

const declension = function(num) {
   return num % 10 === 1 && num % 100 !== 11 ? 
   ['час', 'минута', 'секунда'] : num % 10 > 1 && num % 10 < 5 && (num % 100 < 12 || num % 100 > 14) ? 
   ['часа', 'минуты', 'секунды'] : ['часов', 'минут', 'секунд'];
};

const addZero = function(num) {
   return (num + "").length < 2 ? "0" + num : num;
}

const clock = function() {
   const date = new Date();

   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDate();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   let monthStr = date.toLocaleDateString('RU-ru', {
      month: 'long',
   });

   let weekday = date.toLocaleDateString('RU-ru', {
      weekday: 'long',
   });

   monthStr = monthStr.slice(0, monthStr.length - 1) + 'я';
   weekday = weekday[0].toUpperCase() + weekday.slice(1);

   const longDate = `<div>Сегодня ${weekday}, ${day} ${monthStr} ${year} года, ${hours} ${declension(hours)[0]} ${minutes} ${declension(minutes)[1]} ${seconds} ${declension(seconds)[2]}</div>`;
   const shortDate = `<div>${addZero(day)}.${addZero(month)}.${addZero(year)} - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}</div>`;
   
   document.body.innerHTML = longDate + shortDate;
};

const intervalId = setInterval(function() {
   clock();
}, 1000);

clock();