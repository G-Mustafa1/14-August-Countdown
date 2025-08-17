let day = document.getElementById('days');
let hour = document.getElementById('hours');
let minut = document.getElementById('minutes');
let second = document.getElementById('second');
setInterval(function () {
   let currentDate = new Date().getTime();
   let augest14 = new Date('14 August 2026').getTime();
   // console.log(august14);
   let total = augest14 - currentDate;
   let days = Math.floor(total / (1000 * 60 * 60 * 24));
   day.innerHTML=days
   let hours = Math.floor(total % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   hour.innerHTML=hours
   let minuts = Math.floor(total % (1000 * 60 * 60) / (1000 * 60));
   minut.innerHTML=minuts
   let seconds = Math.floor(total % (1000 * 60) / (1000));
   second.innerHTML=seconds

}, 1000)

