import setBlockClassName from '../util/setBlockClassName.js';
import * as blocks from '../time_data/blocks.js';
import tzHandler from '../time_data/timezone.js';

const [blockList] = document.getElementsByClassName('blocks');

export default function setWeekdaySchedule() {
    const sched = document.createElement('h3');

    sched.classList.add('schedule');
    sched.textContent = 'Schedule: Weekday';
    blockList.appendChild(sched);

    for (let block in blocks.weekdayBlocks) {
        const li = document.createElement('li');
        const blockNum = document.createElement('h3');
        const blockTimes = document.createElement('h3');

        const startHour = Number(
            blocks.weekdayBlocks[block].start.split(':')[0]
        );
        const endHour = Number(blocks.weekdayBlocks[block].end.split(':')[0]);
        const time = {
            start: tzHandler(
                startHour,
                blocks.weekdayBlocks[block].start.split(' ')[1]
            ),
            end: tzHandler(
                endHour,
                blocks.weekdayBlocks[block].end.split(' ')[1]
            ),
        };

        // convert back to 12 hour time, if necessary
        if (time.start.hour > 12) time.start.hour -= 12;
        if (time.end.hour > 12) time.end.hour -= 12;

        li.classList.add(setBlockClassName(blocks.weekdayBlocks[block]));
        li.id = `block_${Number(block)}`;
        blockNum.classList.add('block-num');
        blockTimes.classList.add('block-times');

        blockNum.textContent = `Block ${block}:`;
        // prettier-ignore
        blockTimes.textContent = `${time.start.hour}:${blocks.weekdayBlocks[block].start.split(' ')[0].split(':')[1]} ${time.start.time} -> ${time.end.hour}:${blocks.weekdayBlocks[block].end.split(' ')[0].split(':')[1]} ${time.end.time}`;

        blockList.appendChild(li);
        li.appendChild(blockNum);
        li.appendChild(blockTimes);
    }

    if (tzHandler(0, 'AM').shifted.status) {
        const shifted = document.createElement('p');
        shifted.classList.add('shifted');
        shifted.textContent = `times have been shifted by ${
            tzHandler(0, 'AM').shifted.difference
        } hour(s)`;
        blockList.appendChild(shifted);
    }
}
