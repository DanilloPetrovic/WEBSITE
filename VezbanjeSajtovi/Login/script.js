
// Funkcija za responsivan nav bar
function responsivenavbar(){
    
    let KliknutoDugme = document.querySelector('.buttonheaderresponsive');
    let ResponsiveNavBar = document.querySelector('.responsive');

    if(KliknutoDugme.innerText === 'MENU'){
        document.querySelector('.responsivenavbar').style.display = 'block'; 
        KliknutoDugme.innerText = 'CLOSE';
    }
    else{
        document.querySelector('.responsivenavbar').style.display = 'none';
        KliknutoDugme.innerText = 'MENU';
    }
}


// Funkcija za Log in preko dugmeta

function Login(){
    
    // Uzimanje vrednosti
    let UsernameRegister1 = localStorage.getItem('UsernameRegister'); // Uzimanje Username iz scriptRegisterLogin
    let EmailRegister1 = localStorage.getItem('EmailRegister'); // Uzimanje Email iz scriptRegisterLogin
    let PasswordRegister1 = localStorage.getItem('PasswordRegister'); // Uzimanje Password iz scriptRegisterLogin

    let EmailOrUsernameLogin = document.querySelector('.inputemailorusername').value;
    let PasswordLogin = document.querySelector('.inputpasswordlogin').value;

    let errorLogin = document.querySelector('.errorpasswordlogin');

    if((EmailOrUsernameLogin === EmailRegister1 || EmailOrUsernameLogin === UsernameRegister1) && PasswordLogin === PasswordRegister1){
        
    } else{
        errorLogin.innerText = "Account doesn't exist"
    }
}

// Funkcija za Log in preko entera

let body = document.querySelector('body');

body.addEventListener('keydown', (StisnutoDugme) => {
    
    if(StisnutoDugme.key === 'Enter'){
        // Uzimanje vrednosti
        let UsernameRegister1 = localStorage.getItem('UsernameRegister'); // Uzimanje Username iz scriptRegisterLogin
        let EmailRegister1 = localStorage.getItem('EmailRegister'); // Uzimanje Email iz scriptRegisterLogin
        let PasswordRegister1 = localStorage.getItem('PasswordRegister'); // Uzimanje Password iz scriptRegisterLogin

        let EmailOrUsernameLogin = document.querySelector('.inputemailorusername').value;
        let PasswordLogin = document.querySelector('.inputpasswordlogin').value;

        let errorLogin = document.querySelector('.errorpasswordlogin');

        if((EmailOrUsernameLogin === EmailRegister1 || EmailOrUsernameLogin === UsernameRegister1) && PasswordLogin === PasswordRegister1){
            
        } else{
            errorLogin.innerText = "Account doesn't exist"
        }
    }
});