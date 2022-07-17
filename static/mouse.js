var bolinha = document.querySelector('.cursoranima');
document.addEventListener('mousemove', function(m){
let xPos = m.pageX - 15;
let yPos = m.pageY - 15;
bolinha.style.left = xPos + 'px';
bolinha.style.top = yPos + 'px';
console.log(m.pageX, m.pageY)
});