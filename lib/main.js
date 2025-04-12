import displayDateTime from './display/displayDateTime.js';
import refreshScheduleDisplay from './display/refreshScheduleDisplay.js';
import setSchedule from './schedules/setSchedule.js';
import setWeekend from './schedules/setWeekend.js';
import setBreak from './schedules/setBreak.js';
import { DateTime } from 'luxon';

const todayWeekend = DateTime.now().isWeekend;

const todayFriday =
    DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

displayDateTime();

setInterval(() => {
    displayDateTime();
    refreshScheduleDisplay(todayFriday);
}, 1000);

const scuffedOverride = true;
if (!scuffedOverride) !todayWeekend ? setSchedule() : setWeekend();
else {
    // setWeekend();
    // setSchedule();
    setBreak();
    // return;
}
