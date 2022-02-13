function teleportCircle(){
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);

  document.getElementById("circle").style.left = x;
  document.getElementById("circle").style.top = y;
}

function showCoords(event){
  let x = event.clientX;
  let y = event.clientY;
  let coords = "X: " + x + ", Y: " + y;
  document.getElementById("coords").innerHTML = coords;
}