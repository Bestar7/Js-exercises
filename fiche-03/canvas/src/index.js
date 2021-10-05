// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

const RECT_NUMBER = 101;

let myCanvas = document.querySelector("canvas");
let myContext = myCanvas.getContext("2d");
let page = document.querySelector("#page");
// set the canvas dimensions
let pageWidth = page.clientWidth;
let pageHeight = page.clientHeight;
myCanvas.width = pageWidth - 20;
myCanvas.height = pageHeight;

//Set square properties
const INCREMENT = 5;
let squareWidth = 20;
let squareHeight = 20;
let color = "blue";

// animation on/off
let animation = true;
// event listener sur click gauche
window.addEventListener("click", () => { // "click" ne concerne QUE click gauche
  animation = (!animation);
  if (animation == true)
    requestAnimationFrame(drawOneFrame);
});
// event listener sur click droit
window.addEventListener("contextmenu", event => { // "contextmenu" ne concerne QUE click droit
  event.preventDefault(); // empêche le menu (sauvegarder l'iùmage sous...)
  color = 'rgba('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+',0.5)';
});
// event listener sur +/-  =>  attention au cas négatif
window.addEventListener("keypress", event => {
  if (event.key == "+")
    squareWidth = squareHeight += INCREMENT;
  if (event.key == "-")
    squareWidth = squareHeight -= INCREMENT;
});

// call the callback to draw our animation when the browser is ready
requestAnimationFrame(drawOneFrame);

function drawOneFrame() {
  // Reset everything done in the previous frame
  // We could force the width or height of canvas to force a redraw myCanvas.width = pageWidth;myCanvas.height = pageHeight;
  // however that would not be optimized.
  myContext.clearRect(0, 0, pageWidth, pageHeight);

  myContext.fillStyle = color; //'rgba(255,0,0,0.5)';//'blue';

  //draw dynamically the rectangles at random locations
  for (let i = 0; i < RECT_NUMBER; i++) {
    myContext.fillRect(
      Math.floor(Math.random() * pageWidth),
      Math.floor(Math.random() * pageHeight),
      squareWidth,
      squareHeight
    );
  }
  // Refresh automatically the animation via this recursive call :
  if (animation)
    requestAnimationFrame(drawOneFrame);

  // Slow the animation down via setTimeout
  //requestAnimationFrame(() => setTimeout(drawOneFrame,1000));
}

