/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                               *
 *  this is a simple function for refreshing the current         *
 *  highlighted block and time remaining every 1000ms.           *
 *                                                               *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */

import { UTCFridayBlocks, UTCWeekdayBlocks } from '../time_data/blocks';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks';
import timeRemaining from '../util/timeRemaining';

export default function refreshScheduleDisplay(friday) {
    const remaining = document.getElementById('remaining');
    const blocks = friday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    remaining.textContent = timeRemaining(blocks, friday);
}
