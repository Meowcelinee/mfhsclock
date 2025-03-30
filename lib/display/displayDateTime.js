import { DateTime } from 'luxon';

const time = document.getElementById('time');
const month = document.getElementById('month');

export default function displayDateTime() {
    time.textContent = DateTime.now().toLocaleString({
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23',
    });

    month.textContent = `${DateTime.now().toLocaleString({
        weekday: 'short',
    })}, ${DateTime.now().toLocaleString({
        month: 'short',
        day: 'numeric',
    })}`;
}
