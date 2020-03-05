export const getUnixTimeCode = (date) => {
    console.log(date)
    const UNIXdate = new Date(date).getTime() / 1000
    console.log(UNIXdate)
}
getUnixTimeCode("2020-03-28")