let inputElement = document.getElementById("search");
let buttons = document.querySelectorAll(".calc_numb")
let a = '';
let b = '';
let sign ='';
let finish = false;
inputElement.setAttribute("value", 0);

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '/', 'x'];

function clearAll(){
  a = '';
  b = '';
  sign = '';
  finish = false;
  inputElement.setAttribute("value", 0);
}

document.querySelector('.calc_numb_ac').onclick = clearAll

buttons.forEach(function(buttons){
  buttons.addEventListener("click", function(){
    let buttonValue =this.textContent

    if (digit.includes(buttonValue)){
      if(b === '' && sign === ''){
        a+=buttonValue
        inputElement.setAttribute("value", a);
      } 
      else if(a!=='' && b!=='' && finish){
        
      }
      else {
        b += buttonValue
        inputElement.setAttribute("value", b);
      }
      console.log(a, b, sign)
      return; 
    }


    if(buttonValue === '='){
      if (b === '') b = a;
      switch (sign) {
        case "+":
          a = (+a)+(+b) 
          break;
        case "-":
          a = a - b 
        break;
        case "*":
          a = a * b 
        break;
        case "/":
          a = a / b 
        break;
      }
      finish=true
      inputElement.setAttribute("value", a)
      console.log(a, b, sign)
    }

    if (action.includes(buttonValue)){
      sign = buttonValue
      inputElement.setAttribute("value", sign);
      console.log(a, b, sign)
    }
  })
})
