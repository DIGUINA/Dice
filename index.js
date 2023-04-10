var dice1Random=Math.floor(Math.random()*6)+1;
console.log(dice1Random);

var dice2Random=Math.floor(Math.random()*6)+1;

var dice2=document.querySelectorAll("img")[1].setAttribute("src","image/dice"+ dice2Random + ".png");
var dice1=document.querySelectorAll("img")[0].setAttribute("src","image/dice"+ dice1Random +".png");

document.querySelectorAll("img")[0].addEventListener("click",playMusic1);

function playMusic1(){
     window.location.reload()
     var audio1=new Audio("dice1.mp3");
     audio1.play();
}

if(dice1Random>dice2Random){

  document.querySelectorAll("h1")[0].innerHTML="Player 1 is Wins";

}else if(dice1Random===dice2Random){
  document.querySelectorAll("h1")[0].innerHTML="Egal";
}else{
  document.querySelectorAll("h1")[0].innerHTML="Player 2 is Wins";
}



document.querySelectorAll("img")[1].addEventListener("click",function(){
  window.location.reload();
  var audio2=new Audio("dice2.mp3");
  audio2.play();
});
