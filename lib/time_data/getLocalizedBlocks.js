/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *   this function takes the passed block array and converts     *
 *   the start/end hours from UTC to a localized time string.    *
 *   it also returns the ISO timestamps for the localized        *
 *   start/end times, to make comparisons easier.                *
 *                                                               *
 *   `block_arr` is meant to be an array of "blocks."            *
 *                                                               *
 *   block_arr: [                                                *
 *      {                                                        *
 *          start: {                                             *
 *              hour: number,                                    *
 *              minute: number,                                  *
 *          },                                                   *
 *          end: {                                               *
 *              hour: number,                                    *
 *              minute: number,                                  *
 *          },                                                   *
 *      }                                                        *
 *      ...                                                      *
 *   }                                                           *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { UTCWeekdayBlocks, UTCFridayBlocks } from '../time_data/blocks';
import { DateTime } from 'luxon';

const friday = DateTime.now().toLocaleString({ weekday: 'long' }) === 'Friday';

export default function getLocalizedBlocks() {
    const hourOffset = DateTime.now().offset / 60;

    const blocks = friday ? UTCFridayBlocks : UTCWeekdayBlocks;

    return blocks.map((b, index) => {
        const localeBlockStart = DateTime.fromObject({
            hour: b.start.hour + hourOffset,
            minute: b.start.minute,
        }).toLocaleString(DateTime.TIME_24_SIMPLE);

        const localeBlockEnd = DateTime.fromObject({
            hour: b.end.hour + hourOffset,
            minute: b.end.minute,
        }).toLocaleString(DateTime.TIME_24_SIMPLE);

        const localeISO = {
            start: DateTime.fromObject({
                hour: b.start.hour + hourOffset,
                minute: b.start.minute,
            }),
            end: DateTime.fromObject({
                hour: b.end.hour + hourOffset,
                minute: b.end.minute,
            }),
        };

        return {
            block: index + 1,
            start: localeBlockStart,
            end: localeBlockEnd,
            iso: localeISO,
        };
    });
}
