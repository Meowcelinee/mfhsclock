const blockList = document.getElementById('blocks');

export default function setBreak() {
    const sched = document.createElement('h3');
    const h3 = document.createElement('h3');
    const subtext = document.createElement('p');

    sched.className = 'schedule';
    sched.textContent = 'Schedule: none';

    h3.className = 'weekend-display';
    h3.textContent = 'have a nice break :D';

    subtext.className = 'remaining';
    subtext.textContent = 'sleep while you still can';

    blockList.append(sched, h3, subtext);
}
