import { UTCWeekdayBlocks, UTCFridayBlocks } from '../time_data/blocks.js';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks.js';
import setBlockClassName from '../util/setBlockClassName.js';
import { DateTime } from 'luxon';

const [blockList] = document.getElementsByClassName('blocks');

export default function setSchedule() {
    const sched = document.createElement('h3');

    sched.classList.add('schedule');
    sched.textContent = 'Schedule: Weekday';
    blockList.appendChild(sched);

    const todayFriday =
        DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

    const blocksToday = todayFriday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    for (let block in blocksToday) {
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        li.classList.add('block');
        blockNum.textContent = `Block ${block}:`;
        blockTimes.textContent = `${blocksToday[block].start} -> ${blocksToday[block].end}`;

        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    }
}
