function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);

    if (!key) return; 

    key.classList.add('playing');

    audio.currentTime = 0; // rewind to the start

    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
