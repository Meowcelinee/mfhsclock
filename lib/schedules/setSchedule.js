import { UTCWeekdayBlocks, UTCFridayBlocks } from '../time_data/blocks.js';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks.js';
import setBlockClassName from '../util/setBlockClassName.js';
import { DateTime } from 'luxon';

const [blockList] = document.getElementsByClassName('blocks');

export default function setSchedule() {
    const sched = document.createElement('h3');

    const todayFriday =
        DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

    sched.classList.add('schedule');
    sched.textContent = `Schedule: ${todayFriday ? 'Friday' : 'Weekday'}`;
    blockList.appendChild(sched);

    const blocksToday = todayFriday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    blocksToday.map(block => {
        // create block element
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        // display block number & block time
        li.className = setBlockClassName(block, todayFriday);
        blockNum.textContent = `Block ${block.block}:`;
        blockTimes.textContent = `${block.start} -> ${block.end}`;

        // set an id based on the block number to make refreshing less of a PITA
        li.id = `block_${block.block}`;

        // append block element to list
        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    });

    const hourOffset = DateTime.now().offset / 60 + 4;

    // let the user know if the time has been shifted
    if (hourOffset !== 0) {
        const shifted = document.createElement('p');
        shifted.className = 'shifted';
        shifted.textContent = `times have been shifted by ${hourOffset} hour(s)`;
        blockList.appendChild(shifted);
    }
}
