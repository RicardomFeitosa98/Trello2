class BoardController { 
    constructor(){
        this.board = new Boardbuilder
    }

    adiciona() {
      if(document.getElementsByClassName("flexbox").length < 1){
        this.board.build("board1")
      }

      
    }

  





}