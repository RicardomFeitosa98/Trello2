let controller = new LoginController();

document
    .querySelector('#form')
    .addEventListener('submit',function(event){
        controller.submit(event)
    }); 