const commandButton = document.querySelectorAll('[data-command]');

let hours = 0;
let minutes = 0;
let  seconds = 0;

const time = 1000; // quantos milésimos equivale um segundo
let stopWatch;

commandButton.forEach((btn) =>{
    btn.addEventListener("click", (event) =>{
        const valueOfButtons = event.target.innerText;

        if(valueOfButtons === "Iniciar"){
            startCounter();
        }else if(valueOfButtons === "Pausar"){
            pauseCounter();
        }else{
            stopCounter();
        }
    })
})

function startCounter(){
    stopWatch = setInterval(timer, time);
}

function pauseCounter(){
    clearInterval(stopWatch);
}

function stopCounter(){
    clearInterval(stopWatch);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.querySelector('[data-counter]').innerHTML = "00:00:00";
}

function timer(){        
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }


                                   //if minutos menor que 10
                                    //então coloque 0 antes + o minuto
                                    //se não exiba apenas os numeros   
    let timerFormated = (hours < 10 ? '0' + hours : hours) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
    document.querySelector('[data-counter]').innerHTML = timerFormated;
}
