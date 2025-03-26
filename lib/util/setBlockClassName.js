import tzHandler from '../time_data/timezone.js';

export default function setBlockClassName(block) {
    let [hour, min, ...rest] = new Date().toLocaleTimeString().split(':');
    [rest] = rest.slice(' ');
    let time = rest.split(' ')[1];

    const [blockStartHour, blockStartTime] = [
        Number(block.start.split(':')[0]),
        block.start.split(' ')[1],
    ];
    const [blockEndHour, blockEndTime] = [
        Number(block.end.split(':')[0]),
        block.end.split(' ')[1],
    ];

    const adjustedBlockStart = tzHandler(blockStartHour, blockStartTime);
    const adjustedBlockEnd = tzHandler(blockEndHour, blockEndTime);

    // convert time strings to numbers for comparisons
    hour = Number(hour);
    min = Number(min);

    // convert to 24 hour to make comparisons easier
    if (hour < 12 && time === 'PM') hour += 12;
    if (hour === 12 && time === 'AM') hour -= 12;

    // create variables for comparing times
    let blockStart = Number(
        `${adjustedBlockStart.hour}.${block.start.split(':')[1].split(' ')[0]}`
    ).toFixed(2);
    let blockEnd = Number(
        `${adjustedBlockEnd.hour}.${block.end.split(':')[1].split(' ')[0]}`
    ).toFixed(2);
    let currentTime = Number(`${hour}.${min}`).toFixed(2);

    const afterStart = currentTime >= blockStart;
    const beforeEnd = currentTime < blockEnd;
    if (afterStart && beforeEnd) return 'block-current';

    return 'block';
}
