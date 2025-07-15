let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");
let text = document.querySelectorAll("p");
let operators = document.querySelectorAll(".operations");
let equals = document.querySelector("#equals");

let userNumber = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let digit = button.innerText;
        console.log(digit);
        let str= userNumber.toString();
        if(userNumber==0){
        userNumber = button.innerText;
        screen.innerText = userNumber;
       }
        else
        {userNumber = userNumber + button.innerText;
        screen.innerText = userNumber;
        console.log(userNumber);
        
        
        }
         if(digit==="+" || digit==="-" || digit==="*" || digit==="/" ){
            let num1 = str.slice(str.indexOf(digit)+1,str.length);
            console.log("num1 =" ,num1);
            let num2 = str.slice(str.indexOf(digit)-1,str.length);
            console.log("num2",num2);
            calculate(num1,num2,digit);
        }
    })
})

add = (a,b) => {
    return a+b;
};
subtract = (a,b) => {
    return a-b;
};
multiply = (a,b) => {
    return a*b;
};
divide = (a,b) => {
    return a/b;
};


calculate = (a,b,operator) => {
    if(operator=="+"){
        add(a,b);
    }else  if(operator=="-"){
        subtract(a,b);
    }else  if(operator=="*"){
        multiply(a,b);
    }else  if(operator=="/"){
        divide(a,b);
    }
};

