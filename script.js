let inputElement = document.getElementById("search");
let buttons = document.querySelectorAll(".calc_numb")
let firstNumb = '';
let secondNumb = '';
let sign ='';
let finish = false;
inputElement.setAttribute("value", 0);

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '/', 'x'];

function clearAll(){
  firstNumb = '';
  secondNumb = '';
  sign = '';
  finish = false;
  inputElement.setAttribute("value", 0);
}

document.querySelector('.calc_numb_ac').onclick = clearAll

buttons.forEach(function(buttons){
  buttons.addEventListener("click", function(){
    let buttonValue =this.textContent

    if (digit.includes(buttonValue)){
      if(secondNumb === '' && sign === ''){
        firstNumb+=buttonValue
        inputElement.setAttribute("value", firstNumb);
      } 
      else if(firstNumb!=='' && secondNumb!=='' && finish){
        secondNumb = buttonValue;
        finish = false;
        inputElement.setAttribute("value", secondNumb);
      }
      else {
        secondNumb += buttonValue
        inputElement.setAttribute("value", secondNumb);
      }
      console.log(firstNumb, secondNumb, sign)
      return; 
    }


    if(buttonValue === '='){
      if (secondNumb === '') secondNumb = firstNumb;
      switch (sign) {
        case "+":
          firstNumb = (+firstNumb)+(+secondNumb) 
          break;
        case "-":
          firstNumb = firstNumb - secondNumb 
        break;
        case "x":
          firstNumb = firstNumb * secondNumb 
        break;
        case "/":
          firstNumb = firstNumb / secondNumb 
        break;
      }
      finish=true
      inputElement.setAttribute("value", firstNumb)
      console.log(firstNumb, secondNumb, sign)
    }

    if (action.includes(buttonValue)){
      sign = buttonValue
      inputElement.setAttribute("value", sign);
      console.log(firstNumb, secondNumb, sign)
    }
  })
})
