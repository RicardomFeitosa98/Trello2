class BoardController { 
    constructor(){
        this.board = new Boardbuilder
    }

    adiciona() {
      if(document.getElementsByClassName("board").length < 1){
        this.board.build("board1")
        return
      }
      if(document.getElementsByClassName("board").length ==1){
        this.board.build("board2")
        return
      }
      if(document.getElementsByClassName("board").length ==2){
        this.board.build("board3")
        return
      }
      
    }
apagaboard(){
document.getElementById("board1").remove()

 }
  





}