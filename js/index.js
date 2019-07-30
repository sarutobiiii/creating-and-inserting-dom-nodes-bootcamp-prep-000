//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  ];
  
  function init() {
    let index = 0;
    
    const body = document.querySelector('body')
    
    body.addEventListener('keydown', function(e) {
      const key = e.key;
      if (key === codes[index]){
        index++;
        
        if (index ===
      }
    }
  }