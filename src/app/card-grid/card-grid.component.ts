import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../images.service";
@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {
  ngOnInit() {  }

  constructor(public imageService : ImagesService) { }
cardsArray=this.imageService.Images;
gameGrid=[];
  addImages(l){
    this.gameGrid=[];
   var imagearr=this.cardsArray.sort(function(){
     return 0.5 -Math.random();
   })
     console.log(l);
    for(var i=0;i<l*6;i++)
    {
      this.gameGrid[i]=imagearr[i];
      //console.log(gameGrid[i]);
   }
   
   }
  matchedCard=this.gameGrid.length;
bool:boolean=false;   
  levels=[1,2,3,4,5];

  start(l)
   {
    this.startGame(l);
   }

startGame(l){
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 500;

var matchedCard=this.matchedCard;
var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.innerHTML="";
grid.innerHTML="";
game.appendChild(grid);
console.log(game);
this.addImages(l);
     
this.gameGrid=this.gameGrid.concat(this.gameGrid).sort(function()
{
  return 0.5-Math.random();
})

for(var i=0;i<this.gameGrid.length;i++)
    {
      
matchedCard=this.gameGrid.length;

      var name = this.gameGrid[i].name,
            img = this.gameGrid[i].img;
        var card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;
        var front = document.createElement('div');
        front.classList.add('front');
      
        var back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url(./assets/' + img + ')';
       // back.setAttribute(src,img);
       if(l==5){
        var x=150-(l-1)*15.2;
        var y=150-(27.5*2); 
        }
        else if(l==4){
          var x=150-(l-1)*12.2;
          var y=150-(27.5*2); 
          }
            else if(l>1)
            {
              var x=150;
             var y=150-(l-1)*27.5;
            }
             else{
             var y=150;
             var x=150;
            }
card.style.height=y+'px';
card.style.width=x+'px';

front.style.height=y+'px';
front.style.width=x+'px';

back.style.height=y+'px';
back.style.width=x+'px';

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    }

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

var bool=this.bool;

grid.addEventListener('click', function (event)
 {

  var clicked = <HTMLElement>event.target;
  var click=<HTMLElement>clicked.parentNode;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || click.classList.contains('selected') || click.classList.contains('match')) {
    return;
  }


  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = click.dataset.name;
      console.log(firstGuess);
      click.classList.add('selected');
    } else {
      secondGuess = click.dataset.name;
      console.log(secondGuess);
      click.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        matchedCard=matchedCard-2;
        console.log(matchedCard);
        }
      setTimeout(resetGuesses, delay);
      if(matchedCard==0)
      {
        grid.innerHTML="";
        alert("lvel complted");
      }
      
    }
    previousTarget = clicked;
  }

}
)

}






}
