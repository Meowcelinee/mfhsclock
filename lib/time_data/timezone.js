export default function tzHandler(time) {
    const UTCHourOffset = new Date().getTimezoneOffset() / -60;
    const ESTHourOffset = -4;

    const clientESTDifference = UTCHourOffset - ESTHourOffset;
    const timeShifted = clientESTDifference !== 0;

    let newTime = time + clientESTDifference;

    if (newTime > 12) newTime -= 12;
    if (newTime < 1) newTime += 12;

    return {
        hour: newTime,
        shifted: {
            status: timeShifted,
            difference: clientESTDifference,
        },
    };
}
