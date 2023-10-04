    const w = Number(prompt("enter your weight"));
    const h = Number(prompt("enter your height in cm"));

function bmicalculator(w,h){
    console.log((703 * w) / (h*h));     
 }

 function checkbmi(){
    
 }

 function ok(){
    let BMI = bmicalculator(w,h);
    checkbmi(BMI);
    if (BMI < 18.5){
        console.log("underweight");
    }else if (BMI >= 24.9 && BMI >18.5){
        console.log("healthy");
    }else if (BMI > 30){
        console.log("overweight");
    }
    }