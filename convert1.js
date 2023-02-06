const mmToInches = 25.4
const cmToInches = 2.54
const mToInches = 0.0254

function convertInchesToMm(numberOfInches) {
  return numberOfInches * mmToInches;
}

function convertInchesToCm(numberOfInches) {
  return numberOfInches * cmToInches;
}

function convertInchesToM(numberOfInches) {
  return numberOfInches * mToInches;
}

let arguments = process.argv;
console.log(arguments);
let numberOfInches = arguments[2];

let unit = arguments[3];
if (unit === "-mm"){
  console.log (convertInchesToMm(numberOfInches));
}else if (unit === "-cm"){
  console.log (convertInchesToCm(numberOfInches));
  }else if (unit === "-m"){
console.log (convertInchesToM(numberOfInches));
  }else {
    console.log ("Error: Unknown unit");
  }


if(convertInchesToMm(1) === mmToInches){
  console.log (`🟢Succsess mm = numberOfInches`);
} else {
  console.log (`🔴 Error mm != "numberOfInches`);


}
if(convertInchesToCm(1) === cmToInches){
  console.log (`🟢Succsess cm = numberOfInches`);
} else {
  console.log (`🔴 Error cm != "numberOfInches`);


}if(convertInchesToM(1) === mToInches){
  console.log (`🟢Succsess m = numberOfInches`);
} else {
  console.log (`🔴 Error m != "numberOfInches`);


}
