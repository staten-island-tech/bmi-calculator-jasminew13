    const w = Number(prompt("enter your weight in kg"));
    const h = Number(prompt("enter your height in cm"));

 function getBMI(){
    return(w / (h*h*10000)); 
        
 }
 function bmicalculator(w,h){
      let BMI = getBMI();
 }


 function bmi(){
        
    checkbmi(BMI);
    if (BMI < 18.5) {
        console.log("underweight");
    } else if (BMI >18.5 && BMI <= 24.9) {
        console.log("healthy");
    } else if (BMI > 30) {
        console.log("overweight");
    }
    }
     bmicalculator();