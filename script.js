const clock = document.getElementById('clock');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
let sec = 0;
let timer;

function getTime(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' 
    });
};

function startTimer() {
    timer = setInterval(function() {
        sec++;
        clock.innerHTML = getTime(sec);
    },1000);
};

start.addEventListener('click', function () {
    clearInterval(timer);
    clock.classList.remove('pause');
    startTimer();
});

pause.addEventListener('click', function () {
    clearInterval(timer);
    clock.classList.add('pause');
});

restart.addEventListener('click', function() {
    clearInterval(timer);
    clock.classList.remove('pause');
    clock.innerHTML = '00:00:00';
    sec = 0;
    startTimer();
});

