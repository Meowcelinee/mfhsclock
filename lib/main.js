import displayDateTime from './display/displayDateTime.js';
import refreshScheduleDisplay from './display/refreshScheduleDisplay.js';
import setSchedule from './schedules/setSchedule.js';

displayDateTime();

setInterval(() => {
    displayDateTime();
    refreshScheduleDisplay();
}, 1000);

setSchedule();
