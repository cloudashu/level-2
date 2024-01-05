//loops

// let ans = 0;

//for (let i = 0; i <= 125; i++) {
    //ans = ans + i;
//}

//console.log(ans);

//function in java Script

//A function in JavaScript is a set of statements of tasks or calculates a value.
// it should take some input and return an output, where there is a relaationships between the input and output.

//function findSum(n) {
    //let ans = 0;
    //for (let i = 0; i <n; i++) {
        //ans = ans + i
    //}
    //return ans;
//}

//let ans1 = findSum(1002)
//console.log(ans1)

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumOfSomething(a, b, fn) {
  let square1 = fn(a);
  let square2 = fn(b);
  return square1 + square2;
}

let ans = sumOfSomething(2, 3, quad);
console.log(ans);
