let controller = new BoardController();
document
    .querySelector('#test')
    .addEventListener('submit',controller.adiciona.bind(controller));     