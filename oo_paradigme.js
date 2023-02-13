
    const convertionTableLength = {
    inches: {mm:0.0254, cm:0.0254, m:0.0254},
    feet: {mm:304.8, cm:30.48, m:0.3048}
    }
    

const convertionTableVolume = {
    pints: {ml:0.0254, dl:0.0, L:0.5506},
    Liter: {cups:0.2365, quarts:0.9463, pints:0.5506}, 
    }

class Converter{
    constructor(convertionTableLength){
        this.convertionTableLength = convertionTableLength;
    }
}

class converter{

    constructor(convertionTableVolume){
        this.convertionTableVolume = convertionTableVolume
    }

    constructor(converterTableLength){
        this.converterTableLength = converterTableLength
    }
}

convertionTableVolume (volume);{
    return (convertionTableVolume * (this.pints))/(this.liter);
}
console.log("converterTableVolume")

convertionTableLength (length);{
    return (length * (this.inches))/(this.feet);
}    
console.log("convertionTableLength")






