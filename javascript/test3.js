// printing numbers from 1 to 10.
// whenever we need to repeat the steps / process : in that case we should use the loops
// 1. while : entry control : we don't know the number of times loop should be executed
// we don't have the fixed criteria for condition.
// 2. for : entry control : steps/ increment : or if you know about end limit  preferred
// for arrays (should be traversal order from 0 to size-1)
// 3. do while. exit control : is not the preferred approach in good practices.

/* let i = 1;
console.log("before loop")
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("after loop"); */


let i = 1;
console.log("before loop")
do {
    console.log(i)
    i = i + 1; //i++
} while (i <= 10);
    console.log("after loop");
