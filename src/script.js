// api documentation: https://whois.fdnd.nl/docs/

// 1 persoon: https://fdnd.directus.app/items/person/67
// iedereen: https://fdnd.directus.app/items/person/?fields=id,name,github_handle,avatar&filter={%22squads%22:{%22squad_id%22:{%22name%22:%22Minor%20Web%20Dev%22}}}&sort=name

// const baseURL = 'https://fdnd.directus.app/';


// const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';
// const endpointMe = 'items/person/221';
// hier beschrijven we de url die we willen gebruiken om mijn data te vinden
// const urlMe = baseURL + endpointMe;
// hier zetten we de twee url's die we hebben om data op te halen in een variabele

// console.log(urlMe);





const context = document.querySelector('canvas').getContext('2d');
// alert(context);

const Ball = function (x, y, radius){
    this.x = x;
    this.y = y;
    this.direction = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 5 + 1;

    this.radius = radius;
    this.color = '#19120b';
    
};




Ball.prototype = {
    UpdatePosition: function(width, height){
        this.x += Math.cos(this.direction) * this.speed; 
        this.y += Math.sin(this.direction) * this.speed;

        if(this.x - this.radius < 0){
            this.x = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
        } else if (this.x + this.radius > width){
            this.x = width - this.radius;
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
    } 

    if(this.y - this.radius < 0){
        this.y = this.radius;
        this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
    } else if (this.y + this.radius > height){
        this.y = height - this.radius;
        this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction) );
} 
    }
}


let balls = new Array();

let x = document.documentElement.clientWidth * 0.5;
let y = document.documentElement.clientHeight * 0.5;

for (let i = 0; i < 100; i++){
    balls.push(new Ball(x, y, Math.random() * 20 + Math.random() * 10));
}

function loop (){
    window.requestAnimationFrame(loop);
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    context.canvas.width = width;
    context.canvas.height = height;

    for (let i = 0; i < balls.length; i++){
        let ball = balls[i];
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
        context.fill();
        ball.UpdatePosition(width, height);
    }

   



    console.log('running');


}

loop();

// inspiratie van https://www.youtube.com/watch?v=hoWjnidQOms&ab_channel=PothOnProgramming


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.imgingrid').forEach(function(tile) {
    const imageUrl = tile.getAttribute('data-image');
    // Remove redundant JavaScript that was handling the hover effect
  });
});

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mousemove', function(e) {
      // Get the position of the element relative to the viewport
      const rect = button.getBoundingClientRect();
      // Calculate the position of the mouse pointer relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Set CSS custom properties (--x and --y) on the button element
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });
  
  


  const buttons = document.getElementsByClassName('button');
  const section = document.querySelector('section:nth-of-type(1)');
  let canvas = document.querySelector('canvas');
  
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      console.log('clicked');
      section.classList.toggle('begone');
      canvas.classList.toggle('begone');
    });
  });

  