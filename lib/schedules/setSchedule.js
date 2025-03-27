import { DateTime } from 'luxon';
import * as blocks from '../time_data/blocks.js';

const [blockList] = document.getElementsByClassName('blocks');

export default function setSchedule() {
    const sched = document.createElement('h3');

    sched.classList.add('schedule');
    sched.textContent = 'Schedule: Weekday';
    blockList.appendChild(sched);

    const todayFriday =
        DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

    const blocksToday = todayFriday
        ? blocks.fridayBlocks
        : blocks.weekdayBlocks;

    for (let block in blocksToday) {
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        // do something

        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    }
}
