
var randd1=  Math.floor(Math.random()*6) +1;

var randd2=  Math.floor(Math.random()*6)+1 ;

var collect=[];

collect[1]='images/dice1.png';

collect[2]='images/dice2.png';

collect[3]='images/dice3.png';

collect[4]='images/dice4.png';

collect[5]='images/dice5.png';

collect[6]='images/dice6.png';
document.querySelector(".img1").setAttribute("src",collect[randd1]);
document.querySelector(".img2").setAttribute("src",collect[randd2]);
if(randd1===randd2){
    document.querySelector("h1").innerHTML="Draw";
}
if(randd1>randd2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}