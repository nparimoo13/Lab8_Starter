// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber()
test('Is my phone number valid', () => {
    expect(functions.isPhoneNumber("949-532-7442")).toBe(true);
});
test('Is this phone number valid', () => {
    expect(functions.isPhoneNumber("949-607-8739")).toBe(true);
});
test('is blahblah valid', () => {
    expect(functions.isPhoneNumber("blahblah")).toBe(false);
});
test('are all those 5s valid', () => {
    expect(functions.isPhoneNumber("55555555")).toBe(false);
});
//isEmail()
test('Is blop blop a valid email', () => {
    expect(functions.isEmail("bopbop@gmail.com")).toBe(true);
});
test('Is Bing Bong a valid email', () => {
    expect(functions.isEmail("BingBong@gmail.com")).toBe(true);
});
test('Is haha a valid email', () => {
    expect(functions.isEmail("haha")).toBe(false);
});
test('Is lool a valid email', () => {
    expect(functions.isEmail("lool")).toBe(false);
});
//isStrongPassword()
test('is it strong',()=>{
    expect(isStrongPassword('wahbahlahPerSon6739405')).toBe(true);
});
test('is it strong',()=>{
    expect(isStrongPassword('AvocadoPerson435678')).toBe(true);
});
test('is it strong',()=>{
    expect(isStrongPassword('hey')).toBe(false);
});
test('is it strong',()=>{
    expect(isStrongPassword('there')).toBe(false);
});


//isDate()
test('is it a date',()=>{
    expect(isDate('08/11/2002')).toBe(true);
});
test('is it a date',()=>{
    expect(isDate('11/20/2022')).toBe(true);
});
test('is it a date',()=>{
    expect(isDate('11212022')).toBe(false);
});
test('is it a date',()=>{
    expect(isDate('woo/wof/bah')).toBe(false);
});

//isHexColor()
test('is it a hexcolor',()=>{
    expect(isHexColor('FF5733')).toBe(true);
});
test('is it a hexcolor',()=>{
    expect(isHexColor('4FFF33')).toBe(true);
});
test('is it a hexcolor',()=>{
    expect(isHexColor('8')).toBe(false);
});
test('is it a hexcolor',()=>{
    expect(isHexColor('wooptydoo')).toBe(false);
});