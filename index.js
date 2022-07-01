const key = document.querySelectorAll('.key');
console.log(key);

key.forEach(key => {

    key.addEventListener('click', () => playnote(key))
});

function playnote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
};