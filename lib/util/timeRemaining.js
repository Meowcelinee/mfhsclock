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
    // prevent console error spam
    if (DateTime.now().isWeekend) return;

    return blockArr
        .map(b => {
            const li = document.getElementById(`block_${b.block}`);
            li.className = setBlockClassName(b);

            const comparison = compareBlocks(blockArr, b);

            // get object for time remaining via ISO timestamp comparison
            const timeInBlock = Interval.fromDateTimes(
                DateTime.fromISO(comparison.currentTime),
                DateTime.fromISO(comparison.endTimeISO)
            ).toDuration(['hours', 'minutes']).toObject();

            // don't display "0 mins" or "0 hr"
            const hours = Math.ceil(timeInBlock.hours) !== 0 ? `${Math.ceil(timeInBlock.hours)} hr` : '';
            const mins = Math.ceil(timeInBlock.minutes) !== 0 ? `${Math.ceil(timeInBlock.minutes)} min` : '';

            // return string if the current time matches the block time
            if (comparison.betweenTimes) {
                return `Time left: ${hours} ${mins}`;
            }
            return false;

            // only return the one result that *isn't* false (enforced by type checking)
        }).filter(result => result !== false && typeof result === 'string')[0];
}
