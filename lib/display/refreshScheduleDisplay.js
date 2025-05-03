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

import getLocalizedBlocks from '../time_data/getLocalizedBlocks';
import timeRemaining from '../util/timeRemaining';

export default function refreshScheduleDisplay() {
    const remaining = document.getElementById('remaining');
    const blocks = getLocalizedBlocks();

    remaining.textContent = timeRemaining(blocks);
}
