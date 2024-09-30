const yourPoints = document.getElementById("header-pontuacao-valor");
const yourTimer = document.getElementById("header-time-valor");
const yourLives = document.getElementById("header-lives-valor");
const squares = document.querySelectorAll(".square");
const start = document.getElementById("comecar");
const stop = document.getElementById("parar");
let interval;

// Eventos
squares.forEach(function(square){
    square.addEventListener("click", () => {
        if (square.style.backgroundImage === ""){
            reduceLive();
        } else {
            addPoint();
        }
        setEnemy("new");
    })
})

start.addEventListener("click", () => {
    gameOn();
})

stop.addEventListener("click", () => {
    gameOff();
})

// Funções
function addPoint(){
    const value = parseInt(yourPoints.innerHTML) + 1;
    yourPoints.innerHTML = value;
}

function reduceTimer(){
    const value = parseInt(yourTimer.innerHTML) - 1;
    yourTimer.innerHTML = value;
    
    if (value === 0){
        fimDeJogo("Tempo Excedido!");
    }
}

function reduceLive(){
    const value = parseInt(yourLives.innerHTML) - 1;
    yourLives.innerHTML = value;

    if (value === 0){
        fimDeJogo("Sem Vidas Restantes!");
    }
}

function setEnemy(type){
    const id = Math.floor(Math.random() * 9) + 1;

    for(let i=1; i<10; i++){
        document.getElementById("square"+i).style.backgroundImage = null;
    }
    if (type === "new"){
        document.getElementById("square"+id).style.backgroundImage = "url('https://img.freepik.com/vetores-premium/marmota-engracada-dos-desenhos-animados-acenando-a-mao_29190-5300.jpg?w=360')";
    }
}

function gameOn (){
    setEnemy("new");
    interval = setInterval(function(){
        reduceTimer();
    }, 1000);
}

function gameOff(){
    setEnemy("clean");
    clearInterval(interval);
    yourTimer.innerHTML = 30;
}

function fimDeJogo(message){
    setEnemy("clean");
    alert(message);
    clearInterval(interval);
    yourTimer.innerHTML = 30;
    yourLives.innerHTML = 3;
    yourPoints.innerHTML = 0;
}