const audio = document.getElementById('radio-stream');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const listenerCount = document.getElementById('listener-count');

let isPlaying = false;
let currentListeners = 125; // Valor inicial de oyentes

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
    volumeValue.textContent = Math.round(volumeSlider.value * 100) + '%';
});

// Función para simular el cambio de oyentes
function updateListeners() {
    let change = Math.floor(Math.random() * 11) - 5; // Cambio aleatorio entre -5 y 5
    currentListeners += change;

    // Asegurar que el número de oyentes se mantenga dentro del rango
    if (currentListeners < 70) currentListeners = 70;
    if (currentListeners > 200) currentListeners = 200;

    listenerCount.textContent = currentListeners;

    // Variación aleatoria del intervalo de actualización
    let randomInterval = Math.floor(Math.random() * 30000) + 60000; // Entre 60 y 90 segundos
    clearInterval(listenerInterval);
    listenerInterval = setInterval(updateListeners, randomInterval);
}

// Actualizar los oyentes con intervalo aleatorio
let listenerInterval = setInterval(updateListeners, Math.floor(Math.random() * 30000) + 60000);