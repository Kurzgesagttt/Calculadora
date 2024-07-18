const display = document.getElementById("display");

function addToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{ 
  display.value = eval(display.value);//eval func calculates an expression, eval(2+2+1) = 5;
  }
  catch(error){
    display.value = "Error";
  }
}