let turn = "X";
function appear(){
  let h= document.getElementById("nav");
  if(h.style.display=="block")
 { document.getElementById("nav").style.display="none";}
 else{
  h.style.display="block"
 }
}
console.log(turn);
function changeturn() {
  if (turn === "X") return "O";
  else {
    return "X";
  }
}
let gameover=false;

function win() {
 let boxtxt=document.getElementsByClassName("boxtext");
  let wins=[
[0,1,2,0,4,0],
[3,4,5,0, 13, 0],
[6,7,8,0, 21, 0],
[0,3,6, -8, 13, 90],
[1,4,7, 0, 13, 90],
[2,5,8, 8, 13, 90],
[0,4,8, 4, 17, 45],
[2,4,6,1, 12, 135]
  ]
  wins.forEach(e =>{
    if(boxtxt[e[0]].innertext===boxtxt[e[1]].innertext && boxtxt[e[2]].innertext===boxtxt[e[1]].innertext &&boxtxt[e[0]].innertext!==undefined)
   { 
      document.getElementsByClassName("info")[0].innerHTML =
      boxtxt[e[0]].innerHTML + " won";
      document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='145px'
      gameover=true;
      document.querySelector(".line").style.visibility = "visible";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "25vw";
    }
 

  })

}
function clearme(){

  let b=document.querySelectorAll('.boxtext');
  Array.from(b).forEach(element =>{
    element.innerHTML=" ";
  });
  turn="X";
  gameover=false;
  document.getElementsByClassName("info")[0].innerHTML =
  "turn for " + turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
  document.querySelector(".line").style.visibility = "hidden";
  gameover=false;
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
   
    if (!element.innertext) {
     
      boxtext.innertext = turn;
      element.querySelector(".boxtext").innerHTML=turn;
      turn = changeturn();
      win();
      if(!gameover){
        
        document.getElementsByClassName("info")[0].innerHTML =
        "turn for " + turn;
      }
    }
  });
});

