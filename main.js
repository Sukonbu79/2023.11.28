'use strict';
{
  const color = document.getElementById('box');
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
  if(box.classList.contains('blue')){
      box.classList.remove('blue');
      box.classList.add('yellow');
  }
  else if(box.classList.contains('yellow')){
    box.classList.remove('yellow');
      box.classList.add('red')}
      else{
        box.classList.remove('red');
        box.classList.add('blue');
      }
      

  });
}
