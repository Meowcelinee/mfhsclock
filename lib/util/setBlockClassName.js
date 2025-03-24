export default function setBlockClassName(block) {
    let [hour, min, ...rest] = new Date().toLocaleTimeString().split(':');
    [rest] = rest.slice(' ');
    let time = rest.split(' ')[1];

    // create variables for each time string segment
    let [blockStartHour, blockStartMin] = block.start.split(':');
    let [blockEndHour, blockEndMin] = block.end.split(':');

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
