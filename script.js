let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let min = 1;
let se = 0;
let  initialCondition = true;
let myVar;

// adicionando tempo
let startTimer = function (){
    
         if(initialCondition === true){
             myVar = setInterval(myTimer, 1000);
         }
    initialCondition = false;
}

function myTimer() {
    se = se + 1;
    seconds.innerHTML = `0${se}`; 
    if(se > 9){
        seconds.innerHTML = se;
            if(se === 60){
            seconds.innerHTML = `00`;
            se = 00;
            addMinute();
            }
    }   

}

function addMinute(){
    minutes.innerHTML = `0${min}`;
    if(min > 9){
        minutes.innerHTML = min;
            if(min === 60){
            minutes.innerHTML = `00`;
            se = 00;
            }
    }
    min = min + 1;
}
// término da adição de tempo

function stop(){
    clearInterval(myVar)
    initialCondition = true;
}

function reset(){
    seconds.innerHTML= `00`;
    minutes.innerHTML = `00`;
    se = 0;
    min = 1;
}

// inicializador
onclick.startTimer();
onclick.stop();
onclick.reset();