class Boardbuilder{
constructor() { 
     
        
}
build(id) { 
    let b1= document.createElement("div")
    b1.className="board"
    b1.id= id
    b1.innerHTML="<h1>nova board</h1>"
    document.body.appendChild(b1)
         
}


}