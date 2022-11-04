//8 kyu problem
// sentence smash (return array of words joined as a sentence)
function smash (words) {
    return words.join(" ")
 };
   ////////////////////////////////////////////////////////
// Grasshopper - Messi goals function 
/*(Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.)*/

 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }
////////////////////////////////////////////////////////
  //Set Alarm
  /* Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.*/
function setAlarm(employed, vacation){
  if(employed === true && vacation === false){
    return true;
  } else{
    return false;
  }
  }
  //other answers
  function setAlarm(employed, vacation){
    return employed && !vacation;
  }
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
//Volume of a Cuboid(Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.)
      class Kata {
        static getVolumeOfCuboid(length, width, height) {
          // your code here
          return length * width * height
        }
      }
      ////////////////////////////////////////////////////////
// Growth of a population
      //Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
    p0 =  Math.floor(p0*(1+percent/100)+aug)
    if (p0>=p)
       return 1
    return nbYear(p0,percent,aug,p)+1
  }
  ////////////////////////////////////////////////////////
//Is this a triangle?
  function isTriangle(a,b,c)
{
  if(a + b > c && b + c > a && c + a > b){
    return true
  } else {
    return false
  }
   
}
//other answer
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

  ////////////////////////////////////////////////////////