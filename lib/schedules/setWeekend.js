const blockList = document.getElementById('blocks');

export default function setWeekend() {
    const sched = document.createElement('h3');
    const h3 = document.createElement('h3');

    h3.classList.add('weekend-display');

    sched.classList.add('schedule');
    sched.textContent = 'Schedule: none';
    h3.textContent = 'have a nice weekend :)';

    blockList.appendChild(sched);
    blockList.appendChild(h3);
}
