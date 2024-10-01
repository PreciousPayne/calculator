let buttons = document.getElementsByClassName('button');
let divide = document.getElementById('divide');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let equals = document.getElementById('equals');
    let dot = document.getElementById('dot');
    let times = document.getElementById('times');
    let deleted = document.getElementById('del');
    let reset = document.getElementById('reset');
let display = document.getElementById('display');

    //add event listener for the buttons;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            display.append(buttons[i].value);
        })
    }
//add event listeners for the operations;
divide.addEventListener('click', function(){
    display.append(divide.value);
})
minus.addEventListener('click', function(){
    display.append(minus.value);
})
plus.addEventListener('click', function(){
    display.append(plus.value);
})
equals.addEventListener('click', function(){
    let calculate = display.innerHTML;
    let solve = eval(calculate);
    display.append(" = " + " " + solve);
})
dot.addEventListener('click', function(){
    display.append(dot.value);
})
reset.addEventListener('click', function(){
    display.innerHTML = '';
})
times.addEventListener('click', function(){
    display.append(times.value);
})
deleted.addEventListener('click', function(){
    display.innerText = display.innerText.slice(0,-1);
})


