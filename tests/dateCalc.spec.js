import { getUnixTimeCode } from '../src/client/js/dateCalc'


describe("Date Calculation Function", () => {
    test("Proper UNIX timecode is calculated #1", () => {
        const input = "2020-03-01"
        const output = 1583020800
        expect(getUnixTimeCode(input)).toEqual(output);
    })
    test("Proper UNIX timecode is calculated #2", () => {
        const input = "1991-05-01"
        const output = 673056000
        expect(getUnixTimeCode(input)).toEqual(output);
    })
    test("Proper UNIX timecode is calculated from year", () => {
        const input = "2020"
        const output = 1577836800
        expect(getUnixTimeCode(input)).toEqual(output);
    })
})
