/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *  this function calculates the time remaining in the block     *
 *  by iterating over a list of blocks, finding the current      *
 *  block, and finding the interval between the current          *
 *  time and the block's end.                                    *
 *                                                               *
 *  it also uses the setBlockClassName function to highlight     *
 *  which block is the current one during the iteration.         *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import compareBlocks from './compareBlocks';
import setBlockClassName from '../display/setBlockClassName.js';
import { Interval, DateTime } from 'luxon';

// prettier-ignore
export default function timeRemaining(blockArr) {
    if (DateTime.now().isWeekend) return;

    return blockArr
        .map(b => {
            const li = document.getElementById(`block_${b.block}`);
            li.className = setBlockClassName(b);

            const comparison = compareBlocks(blockArr, b);

            // get object for time remaining via ISO timestamp comparison
            const timeLeftInBlock = Interval.fromDateTimes(
                DateTime.fromISO(comparison.currentTime),
                DateTime.fromISO(comparison.endTimeISO)
            ).toDuration(['hours', 'minutes']).toObject();

            const hours = Math.ceil(timeLeftInBlock.hours);
            const mins = Math.ceil(timeLeftInBlock.minutes);

            if (comparison.betweenTimes) {
                return `Time left: ${hours !== 0 ? `${hours} hr` : ''} ${
                    mins !== 0 ? `${mins} min` : ''
                }`;
            }

            return false;
        }).filter(result => result !== false && typeof result === 'string')[0];
}
