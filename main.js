const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



function signUp(){
    location.replace("https://kirtikachauhan9.github.io/OBJECT-IDENTIFICATION/index.html")
    
    
}

function signIn(){
    location.replace("https://kirtikachauhan9.github.io/OBJECT-IDENTIFICATION/index.html")
    
}