/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Addition function", () => {
    test("should return 42 for 20 + 22", () => {
        expect (addition(20, 22)).toBe(42);
    })
    test("should return 62 for 40 + 22", () => {
        expect (addition(40, 22)).toBe(62);
    });
    test("should return 'wrong data type' for 'string' + 22", () => {
        expect (addition("string", 22)).toBe('wrong data type');
    })
    test("should return 'wrong data type' for 22 + 'string'", () => {
        expect (addition(22, "string")).toBe('wrong data type');
    })
    test("should return 'wrong data type' for '22' + 'string'", () => {
        expect (addition("22", "string")).toBe('wrong data type');
    })
    test("should return 'wrong data type' for 'NaN' + 'NaN'", () => {
        expect (addition(NaN, NaN)).toBe('wrong data type');
    })
    test("should return 'insufficient data entered' for '' + ''", () => {
        expect (addition("", "")).toBe('insufficient data entered');
    })
});

describe("Subtraction function", () => {

});

describe("Multiplication function", () => {

});

describe("Division function", () => {

});