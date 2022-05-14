// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce( (previousValue, currentValue)=>{
        return currentValue + previousValue;
    });
}

/*
    previousValue: The previously returned value of the function
    currentValue: The value of the current element
*/
module.exports = reverse;

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// function reverse(str) {
//     let reversed = '';
//
//     for(let character of str){
//         reversed = character + reversed;
//     }
//
//     return reversed;
// }


// To test
// jest reversestring/test.js --watch
