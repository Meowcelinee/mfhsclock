export default function tzHandler(hour, time) {
    // convert to 24 hour for comparisons
    hour = hour < 12 && time === 'PM' ? (hour += 12) : hour;

    const UTCHourOffset = new Date().getTimezoneOffset() / -60;
    const ESTHourOffset = -4;

    const clientESTDifference = UTCHourOffset - ESTHourOffset;
    const timeShifted = clientESTDifference !== 0;

    let newTime = hour + clientESTDifference;

    if (newTime >= 12) time = 'PM';
    if (newTime < 1) newTime += 12;
    if (newTime < 12 && newTime - clientESTDifference >= 12 && time === 'PM')
        time = 'AM';

    return {
        hour: newTime,
        time: time,
        shifted: {
            status: timeShifted,
            difference: clientESTDifference,
        },
    };
}
