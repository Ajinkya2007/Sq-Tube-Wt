document.querySelector(".button").addEventListener('click',()=>{
    let sizeChar = parseFloat(document.querySelector(".size").value)
    let thicknessChar = parseFloat(document.querySelector(".thickness").value)
    let sizeMtr = (sizeChar * 0.001)
    let sizeMtrSq = Math.pow(sizeMtr,2)
    
    let thicknessMtr = (thicknessChar * 0.001)
    let formulaWtSq = (sizeMtr - (2 * thicknessMtr))
    let formulaSq = Math.pow((sizeMtr - (2 * thicknessMtr)),2)
    let result = (((sizeMtrSq - formulaSq) *7850).toFixed(3));
    document.querySelector(".result").innerHTML=`The Weight is ${result} kg/m`
  })