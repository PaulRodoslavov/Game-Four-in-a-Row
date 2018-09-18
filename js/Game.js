class Game {
   constructor() {
      this.board = new Board;
      this.players = this.createPlayers();
      this.ready = false;
   }
   /**
    * Creates two player objects
    * @return  {Array}    An array of two Player objects.
    */
   createPlayers() {
      const players = [new Player('Player 1', '#e15258', 1, true),
         new Player('Player 2', '#e59a13', 2)
      ];
      return players;
   }

   /**
    * Branches code, depending on what key player presses
    * @param   {Object}    e - Keydown event object
    */
   handleKeydown(event) {
      if (this.ready) {
         if (event.key === 'ArrowLeft') {
            //move left
         }
         else if(event.key === 'ArrowRight') {
            //move rigth
         }
         else if(event.key === 'ArrowDown') {
            //drop down
         }
      }
   }

   // get game ready for play
   startGame() {
      this.board.drawHTMLBoard();
      this.activePlayer.activeToken.drawHTMLToken();
      this.ready = true;
      // console.log(this.players);
   }
   get activePlayer() {
      return this.players.find(player => player.active);

   }

}
