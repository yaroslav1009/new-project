let inputElement = document.getElementById("search");
let buttons = document.querySelectorAll(".calc_numb")
let a = '';
let b = '';
let sign ='';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '/', 'x'];

buttons.forEach(function(buttons){
  buttons.addEventListener("click", function(){
    let buttonValue =this.textContent

    if (digit.includes(buttonValue)){
      if(b === '' && sign === ''){
        a+=buttonValue
        inputElement.setAttribute("value", a);
      }
      else {
        b += buttonValue
        inputElement.setAttribute("value", b);
      }
      console.log(a, b, sign)
      return; 
    }

    if (action.includes(buttonValue)){
      sign = buttonValue
      inputElement.setAttribute("value", sign);
      console.log(a, b, sign)
    }
  })
})
