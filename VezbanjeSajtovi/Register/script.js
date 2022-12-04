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

// Funkcija za validaciju 
function Registracija(){

    // Uzimanje vrednosti
    var Ime = document.querySelector('.inputime').value; // Uzimanje ime
    var Prezime = document.querySelector('.inputprezime').value; // Uzimanje prezime
    var Username = document.querySelector('.inputusername').value; // Uzimanje username
    var Email = document.querySelector('.inputemail').value; // Uzimanje email
    var ConfirmEmail = document.querySelector('.inputconfirmemail').value; // Uzimanje potvrdnog emaila
    var Password = document.querySelector('.inputpassword').value; // Uzimanje sifre
    var ConfirmPassword = document.querySelector('.inputconfirmpassword').value; // Uzimanje potvrdne sifre
    var Btn = document.querySelector('.registerbtn'); // Uzimanje dugmeta za register

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