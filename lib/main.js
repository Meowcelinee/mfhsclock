import setWeekdaySchedule from './schedules/setWeekdaySchedule.js';
import setFridaySchedule from './schedules/setFridaySchedule.js';
import setWeekendDisplay from './schedules/setWeekendDisplay.js';
import { DateTime } from 'luxon';

const time = document.getElementById('time');
const month = document.getElementById('month');

const todayWeekend = DateTime.now().isWeekend;

setInterval(() => {
    time.textContent = DateTime.now().toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/New_York',
    });
    month.textContent = DateTime.now().toLocaleString({
        month: 'short',
        day: 'numeric',
        timeZone: 'America/New_York',
    });
}, 1000);

if (!todayFriday && !todayWeekend) setWeekdaySchedule();

if (todayFriday) setFridaySchedule();

if (todayWeekend) setWeekendDisplay();
