
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


// Funkcija za validaciju preko dugmeta
function Registracija(){

    // Uzimanje vrednosti

    let Ime = document.querySelector('.inputime').value; // Uzimanje ime
    let Prezime = document.querySelector('.inputprezime').value; // Uzimanje prezime
    let Username = document.querySelector('.inputusername').value; // Uzimanje username
    let Email = document.querySelector('.inputemail').value; // Uzimanje email
    let ConfirmEmail = document.querySelector('.inputconfirmemail').value; // Uzimanje potvrdnog emaila
    let Password = document.querySelector('.inputpassword').value; // Uzimanje sifre
    let ConfirmPassword = document.querySelector('.inputconfirmpassword').value; // Uzimanje potvrdne sifre
    let Btn = document.querySelector('.registerbtn'); // Uzimanje dugmeta za register
    let BtnToLogin = document.querySelector('.tologinbtn'); // Uzimanje dugmeta koje vodi do Login
    let ObacestenjeValidacijaEmaila = document.querySelector('.tologinh2'); // Obavestenje za validaciju emaila

    // Local Storage
    localStorage.setItem('UsernameRegister', Username);
    localStorage.setItem('EmailRegister', Email);
    localStorage.setItem('PasswordRegister', Password);

    let IndexAt = Email.indexOf("@"); // Uzimanje Indexa '@'
    let PosleAt = Email.substring(IndexAt+1); // Uzimanje texta posle '@'
    let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
    let PreAt = Email.substring(0,IndexAt); // Uzimanje texta pre '@'
    let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
    let IzmedjuAtTacka = Email.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
    let PosleTacke = Email.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
    let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
    let Obavestenje = document.querySelector('#obavestenje'); // Uzimanje p
    let btnregister = document.querySelector('.registerbtn'); // Uzimanje register dugmeta

    // Validacija
    if(Ime.length > 1 && Prezime.length > 1 && Username.length >= 5 && Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4 && Email === ConfirmEmail && Password.length >= 6 && Password === ConfirmPassword){
        Btn.style.display = 'none';
        BtnToLogin.style.display = 'block';
        ObacestenjeValidacijaEmaila.innerText = 'Successfully register press the button to Log In';

    }
    else{
        console.log("Nije Validno");
    }


    ////////////////// Greske //////////////////

    // Neunosenje imena
    let pErrorFirstName = document.querySelector('.errorfirstname');
    if(Ime.length > 1){
        pErrorFirstName.innerText = '';
    } else{
        pErrorFirstName.innerText = 'first name must contain at least 2 characters';
    }

    // Neunosenje prezimena
    let pErrorLastName = document.querySelector('.errorlastname');
    if(Prezime.length > 2){
        pErrorLastName.innerText = '';
    } else{
        pErrorLastName.innerText = 'last name must contain at least 2 characters';
    }

    // Kratak Username
    let pErrorUsername = document.querySelector('.errorusername');
    if(Username.length < 5){
        pErrorUsername.innerText = 'username must contain at least 6 characters'
    } else{
        pErrorUsername.innerText = '';
    }

    // Los Email    
    let pErrorEmail = document.querySelector('.erroremail');
    if(Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 5){
        pErrorEmail.innerText = '';
    } else{
        pErrorEmail.innerText = 'email is not valid'
    }

    // Nepoklapanje Emaila
    let pErrorConfirmEmail = document.querySelector('.errorconfirmemail');
    if(Email !== ConfirmEmail){
        pErrorConfirmEmail.innerText = 'emails are not the same';
    } else{
        pErrorConfirmEmail.innerText = '';
    }

    // Kratka Sifra
    let pErrorPassword = document.querySelector('.errorpassword');
    if(Password.length > 5){
        pErrorPassword.innerText = '';
    } else{
        pErrorPassword.innerText = 'password must contain at least 6 characters'
    }

    // Nepoklapanje sifri
    let pErrorConfirmPassword = document.querySelector('.errorconfirmpassword');
    if(Password === ConfirmPassword){
        pErrorConfirmPassword.innerText = '';
    } else{
        pErrorConfirmPassword.innerHTML = 'passwords are not the same'
    }

}


// Funkcija za validaciju preko entera

let body = document.querySelector('body');

body.addEventListener('keydown', (StisnutoDugme) => {
    if (StisnutoDugme.key === 'Enter') {

        let Ime = document.querySelector('.inputime').value; // Uzimanje ime
        let Prezime = document.querySelector('.inputprezime').value; // Uzimanje prezime
        let Username = document.querySelector('.inputusername').value; // Uzimanje username
        let Email = document.querySelector('.inputemail').value; // Uzimanje email
        let ConfirmEmail = document.querySelector('.inputconfirmemail').value; // Uzimanje potvrdnog emaila
        let Password = document.querySelector('.inputpassword').value; // Uzimanje sifre
        let ConfirmPassword = document.querySelector('.inputconfirmpassword').value; // Uzimanje potvrdne sifre
        let Btn = document.querySelector('.registerbtn'); // Uzimanje dugmeta za register
        let BtnToLogin = document.querySelector('.tologinbtn'); // Uzimanje dugmeta koje vodi do Login
        let ObacestenjeValidacijaEmaila = document.querySelector('.tologinh2'); // Obavestenje za validaciju emaila

        // Local Storage
        localStorage.setItem('UsernameRegister', Username);
        localStorage.setItem('EmailRegister', Email);
        localStorage.setItem('PasswordRegister', Password);

        let IndexAt = Email.indexOf("@"); // Uzimanje Indexa '@'
        let PosleAt = Email.substring(IndexAt+1); // Uzimanje texta posle '@'
        let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
        let PreAt = Email.substring(0,IndexAt); // Uzimanje texta pre '@'
        let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
        let IzmedjuAtTacka = Email.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
        let PosleTacke = Email.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
        let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
        let Obavestenje = document.querySelector('#obavestenje'); // Uzimanje p
        let btnregister = document.querySelector('.registerbtn'); // Uzimanje register dugmeta

        // Validacija
        if(Ime.length > 1 && Prezime.length > 1 && Username.length >= 5 && Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4 && Email === ConfirmEmail && Password.length >= 6 && Password === ConfirmPassword){
            Btn.style.display = 'none';
            BtnToLogin.style.display = 'block';
            ObacestenjeValidacijaEmaila.innerText = 'Successfully register press the button to Log In';
        }
        else{
            console.log("Nije Validno")
        }

        // Greske

        // Neunosenje imena
        let pErrorFirstName = document.querySelector('.errorfirstname');
        if(Ime.length > 1){
            pErrorFirstName.innerText = '';
        } else{
            pErrorFirstName.innerText = 'first name must contain at least 2 characters';
        }

        // Neunosenje prezimena
        let pErrorLastName = document.querySelector('.errorlastname');
        if(Prezime.length > 2){
            pErrorLastName.innerText = '';
        } else{
            pErrorLastName.innerText = 'last name must contain at least 2 characters';
        }

        // Kratak Username
        let pErrorUsername = document.querySelector('.errorusername');
        if(Username.length < 5){
            pErrorUsername.innerText = 'username must contain at least 6 characters'
        } else{
            pErrorUsername.innerText = '';
        }

        // Los Email    
        let pErrorEmail = document.querySelector('.erroremail');
        if(Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 5){
            pErrorEmail.innerText = '';
        } else{
            pErrorEmail.innerText = 'email is not valid'
        }

        // Nepoklapanje Emaila
        let pErrorConfirmEmail = document.querySelector('.errorconfirmemail');
        if(Email !== ConfirmEmail){
            pErrorConfirmEmail.innerText = 'emails are not the same';
        } else{
            pErrorConfirmEmail.innerText = '';
        }

        // Kratka Sifra
        let pErrorPassword = document.querySelector('.errorpassword');
        if(Password.length > 5){
            pErrorPassword.innerText = '';
        } else{
            pErrorPassword.innerText = 'password must contain at least 6 characters'
        }

        // Nepoklapanje sifri
        let pErrorConfirmPassword = document.querySelector('.errorconfirmpassword');
        if(Password === ConfirmPassword){
            pErrorConfirmPassword.innerText = '';
        } else{
            pErrorConfirmPassword.innerHTML = 'passwords are not the same'
        }
    }
});
