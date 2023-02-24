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
      if(document.getElementsByClassName("board").length ==3 ){
        document.getElementById("board3").remove()
        return
        
      }
      if(document.getElementsByClassName("board").length ==2){
        document.getElementById("board2").remove()
        return
        
      }
      if(document.getElementsByClassName("board").length ==1){
        document.getElementById("board1").remove()
        return
      }
    
     }
  





}