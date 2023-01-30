
// Task: Example (demonstrating how to complete a task)
// Create a function that returns the circumference of a circle given the radius
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// Task 1
// Create a list (array) "people" and populate it with the names from https://github.com/MM-203/misc/blob/main/text/names.txt
let people = ["Benedict Thompson", "Lennon Kline", "Trinity Cox", "Angela Willis", "Oliwia Walter", "Halle Orozco", "Gregory Carrillo", "Leyla Dalton", "Roosevelt Harrington", "Antonia Aguilar"];

// Task 2
// Output all the names in the list people
for (let i = 0; i < people.length; i++) {
console.log (people [i]);
}


// Task 3
// Output only the longest name in the list people
let longestName = ""
for (let i=0; i<people.length;i=i+1) {
  if (longestName.length<people[i].length) {
    longestName=people[i]
}
}
console.log  (longestName);



// Task 4
// Output all the names in alphabetical order.
let alphabetical=people.sort ();
for (let i = 0; i <alphabetical; i++) {
  console.log (people [i]);
  }


// Task 5
// Output all the names in order from longest to shortest last name.
// NB! last name (not full name)
function sortByLastName (a ,b) {   
  return a.lastName,length - b.lastName;

}
  //push ( {})

// Task 6
// Fix the following code

people = f(people);
//console.log(people);

const sortedPeople = f(people);
const firstName = name.split(' ')[0];
const lastName = name.split(' ')[1];

function f(splitPeople) { 
  let o = [];
  for (let i = 0; i < 10; i++) 
    o.push({ firstName: sortedPeople[i].split(" ")[0], lastName: sortedPeople[i].split(" ")[1] });
  return splitPeople;
}



console.log( sortedPeople );
