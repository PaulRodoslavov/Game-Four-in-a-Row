class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces.
   * @return  {Array}     An array of space objects
   */

   createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(i, this);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
   }
   drawHTMLBoard(){
      for (let i = 0; i <= spaces.length; i++) {
         drawSVGSpace(this.spaces[i]);
      }
   }
}
