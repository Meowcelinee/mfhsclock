import setWeekdaySchedule from './schedules/setWeekdaySchedule.js';
import setFridaySchedule from './schedules/setFridaySchedule.js';
import setWeekendDisplay from './schedules/setWeekendDisplay.js';
import { weekend } from './time_data/weekdays.js';
import weekdays from './time_data/weekdays.js';
import months from './time_data/months.js';

const time = document.getElementById('time');
const dayOfWeek = document.getElementById('dayOfWeek');
const month = document.getElementById('month');

const todayFriday = weekdays[new Date().getDay()] === 'Friday';
const todayWeekend = weekend.includes(weekdays[new Date().getDay()]);

setInterval(() => {
    time.textContent = new Date().toLocaleTimeString();
    dayOfWeek.textContent = `${weekdays[new Date().getDay()].slice(0, 3)},`;
    // prettier-ignore
    month.textContent = `${months[new Date().getMonth()].slice(0, 3)} ${new Date().getDate()}`;
}, 1000);

if (!todayFriday && !todayWeekend) setWeekdaySchedule();

if (todayFriday) setFridaySchedule();

if (todayWeekend) setWeekendDisplay();
