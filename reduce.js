//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
function extractValue(arr, key) {
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []);
}


// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(accumulator, nextValue){
        let lowerCasedNext = nextValue.toLowerCase();
        if(vowels.indexOf(lowerCasedNext) !== -1){
            if (accumulator[lowerCasedNext]){
                accumulator[lowerCasedNext]++;
            } else {
                accumulator[lowerCasedNext] = 1;
            }
        }
        return accumulator;
    }, {});
}


//Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, nextValue, i){
        accumulator[i][key] = value;
        return accumulator;
    }, arr);
}


// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
// The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. 
// If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
function partition(arr, callback) {
    return arr.reduce(function(accumulator, nextValue){
        if (callback(nextValue)){
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [ [], [] ]);
}