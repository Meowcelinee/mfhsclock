import displayDateTime from './display/displayDateTime.js';

displayDateTime();

setInterval(() => {
    displayDateTime();
}, 1000);
