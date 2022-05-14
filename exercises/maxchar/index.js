// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(chars[char]){
            chars[char]++;
        }else{
            chars[char]=1;
        }
    }

    // Use for in loop to loop through an object
    for(let ch in chars){ // ch represents key
        if(chars[ch] > max){
            max = chars[ch];
            maxChar = ch;
        }
    }

    return maxChar;
}

module.exports = maxChar;

// To test
// jest maxchar/test.js --watch

// === This technique can be used here..
// 1. What is the most common character in the string?
// 2. Does string A have the same characters as string B?
// 3. Does the given string have any repeated characters in it?
