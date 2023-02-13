class Converter{
    
    constructor(){
        this.numUnitsTo = 2/3;
        this.sheepyToMile = 7/8;
    }

    convertToBloitFromSheepy(sheepy){
        return (sheepy * (this.sheepyToMile))/(this.bloitToMile);
    }

    convertToSheepyFromBloit(bloit){
        return (bloit * this.bloitToMile)/(this.sheepyToMile);
    }
}

const converter = new Converter();

if(process.argv.length >= 4){

    const selectedUnitType = process.argv[2];
    const numUnits = Number.parseInt(process.argv[3]);
    
    let convertedUnits = null;

    if(selectedUnitType === "-b"){
        convertedUnits = converter.convertToSheepyFromBloit(numUnits);
        
    } else if(selectedUnitType === "-s"){
        convertedUnits = converter.convertToBloitFromSheepy(numUnits);
    }

    if(convertedUnits !== null){
        console.log(convertedUnits);
    } else{
        console.log("Error could not convert from " + selectedUnitType);
    }
    
} else{
    console.log("converter -[sb] units");
}