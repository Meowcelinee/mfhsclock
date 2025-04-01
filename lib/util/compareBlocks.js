/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *  this function takes two parameters; a block array, and the   *
 *  current block. it compares the current time against the      *
 *  block's start/end times, and returns true if the time        *
 *  matches the current block.                                   *
 *                                                               *
 *  blockArr is a block array (e.x. a block array returned       *
 *  by getLocalizedBlocks), and block is a single block, aka a   *
 *  single element of that block array.                          *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { DateTime, Interval } from 'luxon';

export default function compareBlocks(blockArr, block) {
    const blockStart = DateTime.fromISO(blockArr[block.block - 1].iso.start);
    const blockEnd = DateTime.fromISO(blockArr[block.block - 1].iso.end);

    const currentTime = DateTime.now().toLocal();

    const betweenStartAndEnd = Interval.fromDateTimes(
        blockStart,
        blockEnd
    ).contains(currentTime);

    return betweenStartAndEnd;
}
