export const getUnixTimeCode = (date) => {
    console.log(date)
    const UNIXdate = new Date(date).getTime() / 1000
    console.log(UNIXdate)
    return UNIXdate
}
