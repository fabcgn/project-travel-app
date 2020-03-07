import { getUnixTimeCode } from '../src/client/js/dateCalc'


describe("Date Calculation Function", () => {
    test("Proper UNIX timecode is calculated", () => {
        const input = "2020-03-01"
        const output = 1583020800

        expect(getUnixTimeCode(input)).toEqual(output);
    })
});