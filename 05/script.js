// 1. deduce the Fibonacci series

var n = 7; 
var fibonacci = [0, 1]; 
for (i = 2; i < n; i ++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);


// 2. slider

let left = 0; 	
let timer;			
function autoSlider() {									
    timer = setTimeout(function(){       
        let polosa = document.getElementById('polosa'); 
        left -= 128; 
        if (left < -512) { 
            left = 0;				
            clearTimeout (timer);  
        }
 	polosa.style.left = left + 'px';
 	autoSlider();
    }, 1000); 
}
autoSlider();
