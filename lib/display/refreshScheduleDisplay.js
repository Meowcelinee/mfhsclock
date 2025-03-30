import { UTCFridayBlocks, UTCWeekdayBlocks } from '../time_data/blocks';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks';
import setBlockClassName from '../util/setBlockClassName';

export default function refreshScheduleDisplay(friday) {
    const blocks = friday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    blocks.map((b, num) => {
        const li = document.getElementById(`block_${num + 1}`);
        li.className = setBlockClassName(b, friday);
    });
}
