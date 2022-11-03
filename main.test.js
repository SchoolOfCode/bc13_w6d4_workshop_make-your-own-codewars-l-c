import {firstTest} from './main.js';

// test('check is working', () => {
//     expect(firstTest([2,2,2], [2,2,2])).toBe(16);
// });

test.each([
    {arr1: [2,2,2], arr2: [2,2,2], expected: 16},
    {arr1: [5,9,4,8], arr2: [3,7,8,4], expected: 152},
    {arr1: [4,8,0,2,3], arr2: [5,1,2,7,6], expected: 66},
    {arr1: [2,3,4,6,4,3], arr2: [2,6,1,1,5,7], expected: 59},
    {arr1: [9,9,9,9,9,9,9], arr2: [11,22,33,44,55,66,77], expected: 3293},
])('Calculate the average of the square of the values', ({arr1, arr2, expected}) => {
    expect(firstTest(arr1, arr2)).toBe(expected)})
