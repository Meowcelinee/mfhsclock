/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *   this function sets the class name for the passed block by   *
 *   comparing the current time with the starting and ending     *
 *   times for the block, highlighting the current block based   *
 *   on the current time.                                        *
 *                                                               *
 *   `block` is a SINGLE "block" object, which should follow     *
 *   this shape:                                                 *
 *                                                               *
 *   {                                                           *
 *      start: {                                                 *
 *          hour: number,                                        *
 *          minute: number,                                      *
 *      },                                                       *
 *      end: {                                                   *
 *          hour: number,                                        *
 *          minute: number,                                      *
 *      },                                                       *
 *   }                                                           *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { DateTime, Interval } from 'luxon';
import { UTCWeekdayBlocks, UTCFridayBlocks } from '../time_data/blocks';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks';

export default function setBlockClassName(block, friday) {
    const blocks = friday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    const blockStart = DateTime.fromISO(blocks[block.block - 1].iso.start);
    const blockEnd = DateTime.fromISO(blocks[block.block - 1].iso.end);

    const currentTime = DateTime.now().toLocal();

    const betweenStartAndEnd = Interval.fromDateTimes(
        blockStart,
        blockEnd
    ).contains(currentTime);

    if (betweenStartAndEnd) return 'block-current';

    return 'block';
}
