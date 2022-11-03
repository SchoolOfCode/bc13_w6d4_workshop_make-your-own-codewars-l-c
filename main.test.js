//👉 Write your tests below here:
//import {test} from '@jest/globals';
import {firstTest} from './main.js';



// test('check is working', () => {
//     expect(firstTest([2,2,2], [2,2,2])).toBe(16);     //4, 16, 36 = 56/3 == 18.667365792356972
// });




test.each([
    {arr1: [2,2,2], arr2: [2,2,2], expected: 16},
    {arr1: [5,9,4,8], arr2: [3,7,8,4], expected: 152},  
])('Calculate the average of the square of the values', ({arr1, arr2, expected}) => {
    expect(firstTest(arr1, arr2)).toBe(expected)})


// 

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

// test.each([
//     {word: "CODE", expected:7},
//     {word: "ABCD", expected:9},
//     {word: "ZELDA", expected:15},
//     {word: "LIONS", expected:5},
//     {word: "ECHO", expected:9}
// ])('calculate value of word $word', ({word, expected}) => {
// expect(calculateScrabbleScore(word)).toBe(expected)});