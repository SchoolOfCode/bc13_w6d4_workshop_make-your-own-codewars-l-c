/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

export function firstTest(arr1, arr2){
    console.log("hello")

    // declare an empty array
    // loop the first array
    // loop the second array
    // add the values of the same indices and push to new array

    // loop through the new array and square each item

    // add the values together 
    // divide them by the length of the array
    // return the value

    let returnArr = []

    for (let i = 0; i < arr1.length; i++){
        returnArr.push(arr1[i] + arr2[i])
    }
    for (let i = 0; i < returnArr.length; i++){
        returnArr[i] = (returnArr[i] * returnArr[i])
    }
    let result = 0
    for (let i = 0; i < returnArr.length; i++){
        result += returnArr[i]
    }
    result /= returnArr.length


    console.log(result)
    return result
}
