/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *  this function calculates the time remaining in the block     *
 *  by iterating over a list of blocks, finding the current      *
 *  block, and finding the interval between the current          *
 *  time and the block's end.                                    *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import compareBlocks from './compareBlocks';
import setBlockClassName from './setBlockClassName';
import { Interval, DateTime } from 'luxon';

export default function timeRemaining(blockArr, friday) {
    return blockArr
        .map(b => {
            const li = document.getElementById(`block_${b.block}`);
            li.className = setBlockClassName(b, friday);

            const comparison = compareBlocks(blockArr, b);

            const inter = Interval.fromDateTimes(
                DateTime.fromISO(comparison.currentTime),
                DateTime.fromISO(comparison.endTimeISO)
            );

            const displayText = inter
                .toDuration(['hours', 'minutes'])
                .toObject();

            if (comparison.betweenTimes)
                return `Time left: ${Math.ceil(displayText.hours)}h ${Math.ceil(
                    displayText.minutes
                )}m`;
            return false;
        })
        .filter(result => result !== false);
}
