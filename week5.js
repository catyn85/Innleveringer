
// NB!! DO NOT CHANGE code as it is given, unless spesificly told to do so.

// Task: Example (demonstrating how to complete a task)
// Create a function that returns the circumference of a circle given the radius
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }


  // Task 1
  // Output "good" if isBanana is true
  
  let isBanana = false;
    if (isBanana === true){
    console.log ("good") ; 
  } 

  // Task 2
  // Output "monkey sad" if isBanana is false, but "good" if true
  else if (isBanana === false) {
    console.log ("monkey sad");
  }
  
  // Task 3
  // Output "hmmm" if isBanana is not true or false, but "good" if true, and "monkey sad" if false.
if (isBanana === true) {
  console.log ("good");
}else if (isBanana === false) {
    console.log ("monkey sad")
  }else 
  console.log ("hmmm"); 

  // Task 4
  // if isBanana and isPrimate then output, "Eating that banana".
  let isPrimate = true;
  if (isBanana && isPrimate === true)
  console.log ("Eating that banana");

  
  
  // Task 5
  // if isBanana or isPrimate then output, "Everything is fine"
if (isBanana || isPrimate === true) {
console.log ("Everthing is fine");
}

  // Task 6
  // if not isBanana and not isPrimate then output, "Ooops."
 if (isBanana || isPrimate === false){
 console.log ("Ooops") 
 }
  
  // Task 7
  // Fix the following code
  // NB! 
  // * This will requier you to make judgments about what is god or bad.
  // * This will requier you to think about the safty of the code. 
  
  function shorten(name){
    return name.split(" ")[0].substring(0,3) + ". " + name.split(" ")[1].substring(0,1); 
  }

  let s = shorten("Christian Simonsen");
  console.log(s);
  