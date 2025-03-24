import tzHandler from '../time_data/timezone.js';

export default function setBlockClassName(block) {
    // let [hour, min, ...rest] = new Date().toLocaleTimeString().split(':');
    let [hour, min, ...rest] = '6:47:16 PM'.split(':');
    [rest] = rest.slice(' ');
    let time = rest.split(' ')[1];

    const adjustedBlockStartHour = tzHandler(
        Number(block.start.split(':')[0])
    ).hour;
    const adjustedBlockEndHour = tzHandler(
        Number(block.end.split(':')[0])
    ).hour;

    console.log(adjustedBlockEndHour, adjustedBlockStartHour);

    // create variables for each time string segment
    let [blockStartHour, blockStartMin] = `${adjustedBlockStartHour}:${
        block.start.split(':')[1]
    }`.split(':');
    let [blockEndHour, blockEndMin] = `${adjustedBlockEndHour}:${
        block.end.split(':')[1]
    }`;

    // convert time strings to numbers for comparisons
    for (let i of [hour, min]) i = Number(i);

    // convert to 24 hour to make comparisons easier
    if (hour < 12 && time === 'PM') hour += 12;

    // i hate this so much but at least it works
    const afterStart = `${hour}:${min}` >= `${blockStartHour}:${blockStartMin}`;
    const beforeEnd = `${hour}:${min}` <= `${blockEndHour}:${blockEndMin}`;
    if (afterStart && beforeEnd) return 'block-current';

    return 'block';
}
