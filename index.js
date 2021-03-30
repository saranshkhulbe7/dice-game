var playHTML ="<div id = 'heading'> <h1>Refresh Me</h1></div><div class='parent-dice-block'><div class='dice'><img id='#img1' src='images/dice1.png' alt='dice-img'><br><div id = 'p1nameid' class = 'pname'>PLAYER 1</div> </div> <div class='dice'><img id='#img2'src='images/dice1.png' alt='dice-img'><br><div id = 'p2nameid' class = 'pname'>PLAYER 2</div></div></div>"

var flag = 0;
var p1scr = -1;
var p2scr = -1;

function myFunc()
{
  if(flag == 0)
  {
    document.body.childNodes[1].childNodes[1].textContent = "Play Again"
    document.body.childNodes[3].innerHTML = playHTML;
    flag = 1;
  }
  
  p1scr = Math.floor(Math.random()*6)+1;
  p2scr = Math.floor(Math.random()*6)+1;
  document.getElementById("#img1").setAttribute("src","images/dice"+p1scr+".png");
  document.getElementById("#img2").setAttribute("src","images/dice"+p2scr+".png");

  if(p1scr>p2scr)
  {
    document.body.childNodes[3].childNodes[0].childNodes[1].textContent = "P1 Wins";
    document.body.childNodes[3].childNodes[0].childNodes[1].style.color = "#ec4646";

  }
  else if (p1scr<p2scr)
  {
    document.body.childNodes[3].childNodes[0].childNodes[1].textContent = "P2 Wins";
    document.body.childNodes[3].childNodes[0].childNodes[1].style.color = "#51c2d5";
  }
  else
  {
    document.body.childNodes[3].childNodes[0].childNodes[1].textContent = "Draw";
    document.body.childNodes[3].childNodes[0].childNodes[1].style.color = "#f4f5db";
  }
}
