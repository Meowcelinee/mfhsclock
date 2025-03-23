import weekdays from './util/weekdays.js';
import months from './util/months.js';

const time = document.getElementById('time');
const dayOfWeek = document.getElementById('dayOfWeek');
const month = document.getElementById('month');

// prettier-ignore
setInterval(() => {
    time.textContent = new Date().toLocaleTimeString();
    dayOfWeek.textContent = weekdays[new Date().getDay()].slice(0, 3);
    month.textContent = `${months[new Date().getMonth()].slice(0, 3)} ${new Date().getDate()}`;
}, 300);
