export const getUnixTimeCode = (date) => {
    return new Date(date).getTime() / 1000
}
