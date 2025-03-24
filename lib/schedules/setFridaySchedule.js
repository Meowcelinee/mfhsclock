import setBlockClassName from '../util/setBlockClassName.js';
import * as blocks from '../time_data/blocks.js';

const [blockList] = document.getElementsByClassName('blocks');

export default function setFridaySchedule() {
    const sched = document.createElement('h3');

    sched.classList.add('schedule');
    sched.textContent = 'Schedule: Friday';
    blockList.appendChild(sched);

    for (let block in blocks.fridayBlocks) {
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        li.classList.add(setBlockClassName(blocks.fridayBlocks[block]));
        blockNum.classList.add('block-num');
        blockTimes.classList.add('block-times');

        blockNum.textContent = `Block ${block}:`;
        blockTimes.textContent = `${blocks.fridayBlocks[block].start} -> ${blocks.fridayBlocks[block].end}`;

        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    }
}
