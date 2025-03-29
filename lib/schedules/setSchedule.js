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

    blocksToday.map(block => {
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        li.classList.add(setBlockClassName(block, todayFriday));
        blockNum.textContent = `Block ${block.block}:`;
        blockTimes.textContent = `${block.start} -> ${block.end}`;

        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    });

    const hourOffset = DateTime.now().offset / 60 + 4;

    if (hourOffset !== 0) {
        const shifted = document.createElement('p');
        shifted.classList.add('shifted');
        shifted.textContent = `times have been shifted by ${hourOffset} hour(s)`;
        blockList.appendChild(shifted);
    }
}
