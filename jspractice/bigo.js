// Big O notation

//Big O notation is a way to formalize fuzzy Counting
// 


// EXAMPLE
/*********************************************************/
//suppose we want to write a function that calculates the sum of all number from 1 up to (and including) some number n.

//more readable. but could potentially take too long with scaling  
function addUpTo (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

//Less readable. but faster than original code 
function addUpToo (n) {
    return n * (n + 1) / 2
}


console.log(addUpTo(25))
console.log(addUpToo(25))