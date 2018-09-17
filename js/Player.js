class Player {
  constructor(name, color, id, active = false, num = 21) {
    this.name = name;
    this.color = color;
    this.id = id;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */
   createTokens(num) => {
      const tokens = [];

      for (let i = 0; i < num; i++) {
         let token = new Token(i, this);
         tokens.push(token);
      }
      return tokens;
   }
}
