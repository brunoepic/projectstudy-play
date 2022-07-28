let ball = document.querySelectorAll('.ball');

function activeColor(){
    ball.forEach((item) =>
        item.classList.remove('selectcolor'));
        this.classList.add('selectcolor');
    }   
ball.forEach((item) => 
item.addEventListener('click', activeColor));


let strokes = document.querySelectorAll('.strokes');

function activeStrokes(){
    strokes.forEach((item) => 
    item.classList.remove('selectangle'));
    this.classList.add('selectangle');
}
strokes.forEach((item) =>
item.addEventListener('click', activeStrokes));


let change = document.querySelectorAll('.change-product');

function activeChanges() {
    change.forEach((item) => 
    item.classList.remove('selectchange'));
    this.classList.add('selectchange');
}
change.forEach((item) =>
item.addEventListener('click', activeChanges));
