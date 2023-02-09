let controller = new RegistrationController();
document
    .querySelector('#form2')
    .addEventListener('submit',controller.register.bind(controller));     