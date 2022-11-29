let userEmail = 'isra@hotmail.com';
let userPassword = 'isra1234';
const numberExp = /[0-9]/;

function validation() {
    let name = 'Israel';
    let user = prompt('Ingrese su correo:').toLowerCase();
    let password = prompt('Ingrese su contraseña:').toLowerCase();
    if (user !== userEmail & password !== userPassword){
        alert('Su correo y contraseña son incorrectos... Vuelva a intentarlo.');
        return false;
    } else if (user !== userEmail) {
        alert('Su correo electrónico no coincide... Vuelva a intentarlo.');
        return false;
    } else if (password !== userPassword) {
        alert('Su contraseña es incorrecta... Vueva a intentarlo.');
        return false;
    } else {
        login(name);
        return true;
    }
}


function login(name) {
    return alert(`Bienvenido ${name}.`);
}

validation();

function mailValidation(user) {
    let validEmail = false;
    for (let i = 0; i <= user.length; i++) {
        if (user[i] === '@') {
            validEmail = true;
        }
    };
    return alert(validEmail);
};

mailValidation(userEmail);

function passwordLength (password) {
    let password8 = false;
    if (password.length >= 8) {
        password8 = true;
    } ;
    return alert(password8);
};

passwordLength(userPassword);

function passwordValidation (password) {
    let validPassword = false;
    for (let i = 0; i <= password.length; i++) {
        if (password.match(numberExp)) {
            validPassword = true;
        };
    };
    return alert(validPassword);
};

passwordValidation(userPassword);
