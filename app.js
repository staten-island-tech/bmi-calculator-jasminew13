    const w = Number(prompt("enter your weight in kg"));
    const h = Number(prompt("enter your height in cm"));

 function getBMI(){
    return (w / ((h * h) * 10000)); 
 }
getBMI();
 function checkBMI(BMI){
    if (18.5 > BMI) {
        console.log("underweight");
    } else if (18.5 <= BMI && BMI <= 24.9) {
        console.log("healthy");
    } else if (25 <= BMI && BMI <= 29.9) {
        console.log("overweight");
    } else if (30 <= BMI) {
        console.log("obese");
    } else {
        console.log("error");
    }
}
     
function bmicalculator(){
    let BMI = getBMI();
    checkBMI(BMI);
} 

bmicalculator();
