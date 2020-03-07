export const getUnixTimeCode = (date) => {
    return new Date(date).getTime() / 1000
}

export const date_diff_indays = function (date2) {
    const today = new Date();
    const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / (1000 * 60 * 60 * 24));
}