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

import compareBlocks from '../util/compareBlocks';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks';

export default function setBlockClassName(block) {
    const blocks = getLocalizedBlocks();

    const {
        startTimeISO,
        endTimeISO,
        currentTime,
        betweenTimes: between,
        beforeNow: before,
    } = compareBlocks(blocks, block);

    if (between) return 'block-current';
    if (before) return 'block-before';

    return 'block';
}
