import displayDateTime from './display/displayDateTime.js';
import refreshScheduleDisplay from './display/refreshScheduleDisplay.js';
import setSchedule from './schedules/setSchedule.js';
import setWeekendDisplay from './schedules/setWeekendDisplay.js';
import { DateTime } from 'luxon';

const todayWeekend = DateTime.now().isWeekend;

const todayFriday =
    DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

displayDateTime();

setInterval(() => {
    displayDateTime();
    refreshScheduleDisplay(todayFriday);
}, 1000);

!todayWeekend ? setSchedule() : setWeekendDisplay();
