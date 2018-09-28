const game = new Game();

document.getElementById('begin-game').addEventListener('click', function (){
   game.startGame();
   console.log(game);
   this.style.display = 'none';
   document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(event){
   game.handleKeydown(event);
});

console.log(game)
