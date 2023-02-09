let controller = new LoginController();

document
    .querySelector('#form')
    .addEventListener('submit',controller.submit.bind(controller)); 
document
    .querySelector('#registerform')
    .addEventListener('submit',controller.register.bind(controller)); 
