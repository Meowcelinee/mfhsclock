/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *   this function takes the passed block array and converts     *
 *   the times from UTC to a localized time string.              *
 *                                                               *
 *   `blocks` is meant to be an object of "blocks"               *
 *                                                               *
 *   block_obj: {                                                *
 *      ...                                                      *
 *      block_number: {                                          *
 *          start: string,                                       *
 *          end: string,                                         *
 *      }                                                        *
 *      ...                                                      *
 *   }                                                           *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { DateTime } from 'luxon';

export default function getLocalizedBlocks(blocks) {
    const hourOffset = DateTime.now().offset / 60;

    if (hourOffset === 0) return blocks;

    const localeBlocks = Object.keys(blocks).map(block => {
        const localeBlockStart = DateTime.fromObject({
            hour: blocks[block].start.hour + hourOffset,
            minute: blocks[block].start.minute,
        }).toLocaleString(DateTime.TIME_SIMPLE);

        const localeBlockEnd = DateTime.fromObject({
            hour: blocks[block].end.hour + hourOffset,
            minute: blocks[block].end.minute,
        }).toLocaleString(DateTime.TIME_SIMPLE);

        return {
            block: block,
            start: localeBlockStart,
            end: localeBlockEnd,
        };
    });

    return localeBlocks;
}
