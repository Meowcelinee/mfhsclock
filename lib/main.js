import displayDateTime from './display/displayDateTime.js';
import refreshScheduleDisplay from './display/refreshScheduleDisplay.js';
import setSchedule from './schedules/setSchedule.js';
import setWeekend from './schedules/setWeekend.js';
import setBreak from './schedules/setBreak.js';
import { DateTime } from 'luxon';

const todayWeekend = DateTime.now().isWeekend;

displayDateTime();

setInterval(() => {
    displayDateTime();
    refreshScheduleDisplay();
}, 1000);

!todayWeekend ? setSchedule() : setWeekend();
