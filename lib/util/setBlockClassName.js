export default function setBlockClassName(block) {
    let [hour, min, ...rest] = new Date().toLocaleTimeString().split(':');
    [rest] = rest.slice(' ');
    let time = rest.split(' ')[1];

    // create variables for each time string segment
    let [blockStartHour, blockStartMin] = block.start.split(':');
    let [blockEndHour, blockEndMin] = block.end.split(':');

    // convert time strings to numbers for comparisons
    hour = Number(hour);
    min = Number(min);
    for (let i of [blockStartHour, blockStartMin, blockEndHour, blockEndMin])
        i = Number(i);

    // convert to 24 hour to make comparisons easier
    if (hour < 12 && time === 'PM') hour += 12;

    // this mess is to make the final comparison easier to read
    const hourAfterStart = hour >= Number(blockStartHour);
    const minAfterStart =
        min > Number(blockStartMin) && hour >= Number(blockStartHour);
    const minBeforeEnd =
        min < Number(blockEndMin) && hour <= Number(blockEndHour);

    if (hourAfterStart && minAfterStart && minBeforeEnd) return 'block-current';

    return 'block';
}
