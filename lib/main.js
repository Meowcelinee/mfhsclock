import setWeekendDisplay from './schedules/setWeekendDisplay.js';
import setSchedule from './schedules/setSchedule.js';
import { DateTime } from 'luxon';

const time = document.getElementById('time');
const month = document.getElementById('month');

const todayWeekend = DateTime.now().isWeekend;

const displayDateTime = () => {
    time.textContent = DateTime.now().toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/New_York',
    });

    month.textContent = `${DateTime.now().toLocaleString({
        weekday: 'short',
    })}, ${DateTime.now().toLocaleString({
        month: 'short',
        day: 'numeric',
        timeZone: 'America/New_York',
    })}`;
};

displayDateTime();

setInterval(() => {
    displayDateTime();
}, 1000);

!todayWeekend ? setSchedule() : setWeekendDisplay();
