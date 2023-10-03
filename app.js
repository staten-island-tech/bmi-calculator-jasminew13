function divide(x,y){
    console.log(x / y);     
 }
 
 function test(){
    //local variable function scope
    const x = Number(prompt("enter your weight"));
    const y = Number(prompt("enter your height in inches"));
    divide(x,y);
}