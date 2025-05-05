/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *  this function creates the main content body for the          *
 *  clock page. it iterates over the current day's block array,  *
 *  creating the needed elements with their respective classes,  *
 *  and sets their content to the block number and its times.    *
 *                                                               *
 *  it also alerts the user if the time has been adjusted to     *
 *  their locale, and by how much.                               *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { UTCWeekdayBlocks, UTCFridayBlocks } from '../time_data/blocks.js';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks.js';
import setBlockClassName from '../display/setBlockClassName.js';
import { DateTime } from 'luxon';

const blockList = document.getElementById('blocks');

export default function setSchedule() {
    const sched = document.createElement('h3');

    const todayFriday =
        DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

    sched.classList.add('schedule');
    sched.textContent = `Schedule: ${todayFriday ? 'Friday' : 'Weekday'}`;
    blockList.appendChild(sched);

    const blocksToday = getLocalizedBlocks();

    blocksToday.map(block => {
        // create block element
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        // display block number & block time
        li.className = setBlockClassName(block);
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
