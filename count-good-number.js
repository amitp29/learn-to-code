/**
 *  digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total  of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The good s of length 1 are "0", "2", "4", "6", "8".
Example 2:

Input: n = 4
Output: 400
Example 3:

Input: n = 50
Output: 564908303
 */

function countGoodNumbers(n) {
    // function isPrime(num) {
    //     if (num == 1 || num == 0) return false;
    //     for (let i = 2; i < i / 2; i++) {
    //         if (num % i == 0) return false;
    //     }
    //     return true;
    // }

    function isGoodNumber(num) {
        let index = num.toString().length - 1;

        while (index >= 0) {
            const divByTen = Math.floor(num / 10);
            // console.log("index: ", index);
            // console.log("divByTen: ", divByTen);
            const lastDigit = num % 10;

            // index is even
            if (index % 2 == 0) {
                if (lastDigit % 2 !== 0) return false;

            } else {
                // index is odd
                if (!(lastDigit in [2,3,5,7])) {
                    return false;
                }
            }
            index--;
            num = divByTen;
        }
        // console.log('The number is good. ');
        
                return true;
    }

    // Main
    let finalCountofGoodNumbers = 0;
    for (let i = 0; i <= Math.pow(10, n); i++) {
        // console.log('\n the number is: ', i);
        
        if (isGoodNumber(i)) finalCountofGoodNumbers++;
    }
    console.log("finalCountofGoodNumbers: ",finalCountofGoodNumbers);

    return finalCountofGoodNumbers
};

countGoodNumbers(1);
countGoodNumbers(4);
// countGoodNumbers(50);