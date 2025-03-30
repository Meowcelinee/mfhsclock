import { UTCFridayBlocks, UTCWeekdayBlocks } from '../time_data/blocks';
import getLocalizedBlocks from '../time_data/getLocalizedBlocks';
import setBlockClassName from '../util/setBlockClassName';

export default function refreshScheduleDisplay(friday) {
    const blocks = friday
        ? getLocalizedBlocks(UTCFridayBlocks)
        : getLocalizedBlocks(UTCWeekdayBlocks);

    blocks.map(b => {
        const li = document.getElementById(`block_${b.block}`);
        li.className = setBlockClassName(b, friday);
    });
}
