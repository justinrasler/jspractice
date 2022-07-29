//8 kyu problem
// sentence smash (return array of words joined as a sentence)
function smash (words) {
    return words.join(" ")
 };
   ////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////
//7 kyu problems
  ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
// is it even (if even return true, if odd return false)
function testEven(n) {
  if(n%2 === 0){
    return true
  } else {
    return false
  }
}
// other solutions
function testEven(n){
    return !(n % 2);
  }

  function testEven(n) {
    return n % 2 === 0 ? true : false;
 }
  ////////////////////////////////////////////////////////
// personalized message (Create a function that gives a personalized greeting. This function takes two parameters: name and owner.)

  function greet (name, owner) {
  
  return name === owner ? "Hello boss" : "Hello guest"
  }
    ////////////////////////////////////////////////////////