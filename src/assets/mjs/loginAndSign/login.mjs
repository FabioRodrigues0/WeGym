import {app} from '../../../firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

//REGISTO USUARIO
export function registerUser()
{
    
    let email = document.getElementById("formRegisterEmail").value;
    let password = document.getElementById("formRegisterPassword").value;

    //VALIDAR
    //ENVIAR FIREBASE....
    if(receiveSignInInfo(email,password))
    {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            alert("USER REGISTERED, YOU CAN NOW LOGGED IN");
            const user = userCredential.user;
            console.log(user);

            document.getElementById("formRegisterEmail").value = "";
            document.getElementById("formRegisterPassword").value = "";
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorCode + " " + errorMessage);
        });
    }
    else
    {
        alert("Dados com formato incorreto!");
    }
}

//VALIDAR INFORMAÇÂO SOBRE EMAIL
function receiveSignInInfo(email,password)
{
    //EXPRESSAO REGULAR CARACTERES + @ + CARACTERES + .com (ou) .pt
    let emailTest = /\w+@\w+.com|.pt/;

    //TESTAR EXPRESSAO REGULAR
    if(emailTest.test(email) && password != "")
    {
        return true;
    }
    else
    {
        return false; 
    }
}

//LOGIN USUARIO
export function loginUser()
{
    let email = document.getElementById("formLoginEmail").value;
    let password = document.getElementById("formLoginPassword").value;
    
    if(receiveSignInInfo(email,password))
    {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            alert("WELCOME " + email);
            const user = userCredential.user;
            window.location.href = "/?user=" + email;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorCode + " " + errorMessage);
        });
    }
    else
    {
        alert("Dados com formato incorreto!");
    }
    
}

//VERIFICAR TODAS AS VEZES SE EXISTE VARIAVEL GLOBAL USER DEFINIDA
export function verifyURL()
{
    const currentUrl = window.location.href;
    const userMark = "/?user="

    const divideCurrentUrl = currentUrl.split("?");
    const userName = divideCurrentUrl[1].substring(5);

    let botaoLogin = document.getElementById("botaoLogin");
    let userLogin = document.getElementById("logoUser");
    let imgUserLogin = userLogin.querySelector("img");
    let userNameLogin = userLogin.querySelector("p");

    if(currentUrl.includes(userMark))
    {
        //LOGGED IN
        changeRoutes(userName);

        botaoLogin.classList.add("d-none");

        userLogin.classList.remove("d-none");
        imgUserLogin.src = "/src/assets/images/userLogo.png";
        imgUserLogin.alt = "user Logo";
        userNameLogin.innerHTML = userName;

    }
    else
    {
        //NO ONE IS LOGGED IN
        botaoLogin.classList.remove("d-none");

        userLogin.classList.add("d-none");
        imgUserLogin.src = "";
        imgUserLogin.alt = "";
    }
}


//ALTERA ROTAS PARA O EMAIL DE UTILIZADOR
function changeRoutes(userEmail)
{
    let routes = document.querySelectorAll("#list-nav li a");

    routes[0].href = "/?user=" + userEmail;
    routes[1].href = "/#about/?user=" + userEmail;
    routes[2].href = "/subcriptions/?user=" + userEmail;
    routes[3].href = "/training/?user=" + userEmail;
    routes[4].href = "/instructors/?user=" + userEmail;
    routes[5].href = "/gallery/?user=" + userEmail;
    routes[6].href = "/contacts/?user=" + userEmail;

    console.log(routes);
}

export function logOff()
{
    window.location.href = "/";
}