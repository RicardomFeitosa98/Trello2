let controller = new LoginController();

document
    .querySelector('#form')
    .addEventListener('submit',controller.submit.bind(controller)); 