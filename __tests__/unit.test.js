// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('1234-567-890')).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});
test('isEmail', () => {
    expect(functions.isEmail('SdsfSE8393@ok.com')).toBe(true);
});
test('isEmail', () => {
    expect(functions.isEmail('hellogmail.com')).toBe(false);
});
test('isEmail', () => {
    expect(functions.isEmail('hello@gmailcom')).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword('Edsdfserfssd')).toBe(true);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('ssdd')).toBe(true);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('3Sfsrtfsf')).toBe(false);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('hsfgsrfasdfsftergsfsdfdasd')).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate('05/15/2020')).toBe(true);
});
test('isDate', () => {
    expect(functions.isDate('05/1/2020')).toBe(true);
});
test('isDate', () => {
    expect(functions.isDate('05/10/20')).toBe(false);
});
test('isDate', () => {
    expect(functions.isDate('005/10/2020')).toBe(false);
});

test('isHexColor', () => {
    expect(functions.isHexColor('#FF0256')).toBe(true);
});
test('isHexColor', () => {
    expect(functions.isHexColor('#f0c')).toBe(true);
});
test('isHexColor', () => {
    expect(functions.isHexColor('#5623')).toBe(false);
});
test('isHexColor', () => {
    expect(functions.isHexColor('4569853')).toBe(false);
});