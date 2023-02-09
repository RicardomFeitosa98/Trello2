let controller = new LoginController();
document
    .querySelector('#form2')
    .addEventListener('submit',controller.submit.bind(controller));     