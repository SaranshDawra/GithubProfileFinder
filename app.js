// Initialize Github
const github = new Github();
// Initialize UI
const ui = new UI();

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', (e) => {
    // Get Input Text
    ui.clear();
    const userText = document.getElementById('searchUser').value;
    if(userText != ''){
       // Make HTTP call
       github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile)
            }
        });
    }
    else{
        ui.showAlert('Input Field is Empty', 'alert alert-danger');
    }
});

