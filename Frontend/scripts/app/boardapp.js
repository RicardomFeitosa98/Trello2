let controler = new BoardController();
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
b1.addEventListener("click",controler.adiciona.bind(controler))
b2.addEventListener('click',controler.apagaboard.bind(controler))
