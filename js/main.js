
let boxes = document.querySelectorAll('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');

let x = 0;
let o = 1;

for (let box of boxes) {
  box.addEventListener('click', (e) => {

    x < o ? box.textContent = 'x' : true;
    x == o ? box.textContent = 'o' : true;

    box.textContent == 'x' ? x++ : true; 
    box.textContent == 'o' ? o++ : true;

    if (
      (box1.textContent == 'x' && box2.textContent == 'x' && box3.textContent == 'x') || 
      (box4.textContent == 'x' && box5.textContent == 'x' && box6.textContent == 'x') || 
      (box7.textContent == 'x' && box8.textContent == 'x' && box9.textContent == 'x') || 
      (box1.textContent == 'x' && box4.textContent == 'x' && box7.textContent == 'x') || 
      (box2.textContent == 'x' && box5.textContent == 'x' && box8.textContent == 'x') || 
      (box3.textContent == 'x' && box6.textContent == 'x' && box9.textContent == 'x') || 
      (box1.textContent == 'x' && box5.textContent == 'x' && box9.textContent == 'x') || 
      (box3.textContent == 'x' && box5.textContent == 'x' && box7.textContent == 'x')
    )
    {      
      document.querySelector('.result').textContent = 'You won!';
      x = 0;
      o = 1;
    }
  })
}

document.querySelector('.btn').addEventListener('click', () => {
  for (box of boxes) {
    document.querySelector('.result').textContent = '';
    box.textContent = '';
    x = 0;
    o = 1;
  }
})
