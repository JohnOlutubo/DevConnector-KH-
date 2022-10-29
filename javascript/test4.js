// find out the factorials of a number;


//5! : 5*4*3*2*1 or 1*2*3*4*5
// 5! : 20*3*2*1
//120
let result = 1
for (let i=1; i<=5; i++) {
    result = result * i;
}
console.log(result);

// find out for the strong number :
//145 : 1! + 4! + 5!
//    : 1 + 24 + 120
// 145
// if sum of the factorials = original number then that number is called a strong number