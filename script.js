'use strict';

const lang = "en";

const week = [
   [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
   ],
   [
     "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
   ]
];


// 1.

if (lang == "ru") {
   console.log(week[0].join(","));
}
if (lang == "en") {
   console.log(week[1].join(","));
}

// 2.

switch(lang) {
   case "ru":
      console.log(week[0].join(","));
      break;
   case "en":
      console.log(week[1].join(","));
}

// 3.

lang === "ru" ? console.log(week[0].join(",")) : console.log(week[1].join(","));
