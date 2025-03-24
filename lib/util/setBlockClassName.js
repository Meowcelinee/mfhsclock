import tzHandler from '../time_data/timezone.js';

export default function setBlockClassName(block) {
    let [hour, min, ...rest] = new Date().toLocaleTimeString().split(':');
    [rest] = rest.slice(' ');
    let time = rest.split(' ')[1];

    const adjustedBlockStartHour = tzHandler(
        Number(block.start.split(':')[0])
    ).hour;
    const adjustedBlockEndHour = tzHandler(
        Number(block.end.split(':')[0])
    ).hour;

    // convert time strings to numbers for comparisons
    hour = Number(hour);
    min = Number(min);

    // convert to 24 hour to make comparisons easier
    if (hour < 12 && hour > 0 && time === 'PM') hour += 12;

    // create variables for comparing time strings
    let blockStart = Number(
        `${adjustedBlockStartHour}.${block.start.split(':')[1]}`
    );
    let blockEnd = Number(`${adjustedBlockEndHour}.${block.end.split(':')[1]}`);
    let currentTime = Number(`${hour}.${min}`).toFixed(2);

    if (blockStart < 3) blockStart += 12;
    if (blockEnd < 3) blockEnd += 12;

    blockStart = blockStart.toFixed(2);
    blockEnd = blockEnd.toFixed(2);

    const afterStart = currentTime >= blockStart;
    const beforeEnd = currentTime < blockEnd;
    if (afterStart && beforeEnd) return 'block-current';

    return 'block';
}
