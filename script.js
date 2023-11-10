'use strict';

const date = new Date();

const week = [
   "Понедельник",
   "Вторник",
   "Среда",
   "Четверг",
   "Пятница",
   "Суббота",
   "Воскресенье"
];

const logWeek = function(curDay, week) {

   for (let day of week) {
      let text = day;
   
      if (day.toLowerCase() === curDay) text = '<b>' + text + '</b>';
      if (day === 'Суббота' || day === 'Воскресенье') text = '<i>' + text + '</i>';

      document.querySelector('body').innerHTML += '<div>' + text + '</div>';
   }
};

const day = date.toLocaleDateString('ru-RU', {weekday: 'long'});

logWeek(day, week);