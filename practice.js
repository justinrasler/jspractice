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
//Abbreviate a Two Word Name (Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.)
    function abbrevName(name){

        // code away
      return name.toUpperCase().split(' ')
        .map(word => word[0])
        .join('.');
    
    }
// other solutions
    function abbrevName(name){
        return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
    }
      ////////////////////////////////////////////////////////