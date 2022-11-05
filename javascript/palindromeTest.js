// palindrome number : original number and reversal number should be same.
// 1. we have to form the reversal number.
// do we need to separate the digits and form the number.
// can we take a mod ?
// digit to form the number.

// then compare the original number with reversal number.

let number = 125;
let digit = 0;
let counter = 0;
let reversal = 0;
let temp = number;
// digit to hold the number.

console.log("digit value =" + digit);

while (number > 0) {
  // do we need to separate the digits and form the number

    digit = number % 10;

    reversal = reversal * 10 + digit;
    console.log(digit);
    number = Math.floor(number / 10);

  //       Math.floor(0.1)
  // 0
    counter++;
  //console.log(number);
}

console.log("final number:" + reversal);
console.log("no of digits in a number = " + counter);

if(reversal == temp) {
    console.log("number is palindrome");
} else {
    console.log("number is not palindrome");
}
