let controller = new BoardController();
document
    .querySelector('#form2')
    .addEventListener('submit',controller.register.bind(controller));     