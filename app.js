// events and simple stop start functions on mousedown for clumsy cube rotyation

const cube = document.querySelector('#cube');

cube.addEventListener('mousedown', stop);
cube.addEventListener('mouseup', start);

function stop() {
  cube.classList.remove('cube-animate');
}

function start () {
  cube.classList.add('cube-animate')
}
