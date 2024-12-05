/*
let firstname = "Liva"
let age = 33
let city = "Seoul"
alert(` My surname is  ${firstname},  I have  ${age},  years old and I am from ${city} `);

console.log ( "firstname : " + typeof firstname)
console.log ( " age : " + typeof age)
console.log ( " city : " + typeof city) */

/*
let username = prompt ("Enter your name" );
let surname = prompt  ("Enter your name" );
let age = prompt ("Enter your age");
let adress =  prompt ("Adress email");
 
alert (`username : ${username}  \nsurname : ${surname}  \nage : ${age}  \nadress : ${adress}`); */

/*
let nomber1 = parseInt(prompt("Entrez un nombre entier"))

let number2 = parseInt(prompt("Entrez un nombre entier"))

let result = nomber1 + number2;

alert(`Resultat de l'addition ; ${nomber1} + ${number2} = ${result}`); */

/*
let age = parseInt(prompt("Veuillez entrer votre âge :"));

if (age >= 18) {
    alert("L'utilisateur est majeur !");
} else {
    alert("L'utilisateur est mineur !");
} */

/*let number = parseInt(prompt("Inserer un nombre pair ou impair:"));

if (number % 2 === 0) {
    console.log("Number pair");
} else {
    console.log("number impair");
} */

/*
    let password = "easy";
    let userInput = prompt("Plese insert yout password identification");
    if (userInput != password) {
        alert("Incorrect password");
        } else {
            alert("Welcome Nicolas ");
        } */



/*
let genre = prompt("Veuillez entrer votre genre (homme ou femme) :");
let age = parseInt(prompt("Veuillez entrer votre âge :"));


if (genre === "homme" && age >= 18) {
  alert("Vous êtes un homme majeur");
} else if (genre === "homme" && age < 18) {
  alert("Vous êtes un homme mineur");
} else if (genre === "femme" && age >= 18) {
  alert("Vous êtes une femme majeure");
} else alert("Vous êtes une femme mineure"); */


/*
let moyenne = parseFloat(prompt("rentrer moyenne d'un élève de l'AFPA ( / 20) "));

if (moyenne === 0){
    console.log ("Un rendez-vous sera programmé en raison de la moyenne.");
} else if (moyenne >= 1 && moyenne <= 5) {
    console.log("trimestre insuffisant")
    } else if (moyenne >= 6 && moyenne <= 10) {
         console.log("trimestre moyen")
         } else if (moyenne >= 11 && moyenne <= 15) {
            console.log("bon trimestre")
            } else if (moyenne >= 16 && moyenne <= 20) {
                 console.log("Excellent trimestre")
                 } else {
                    console.log  ("Veuillez entrer une valeur valide");
                 } */



let option = prompt("rentrer un numéro de mois entre 1 et 12 inclus.")       
switch (option) {
    case "1":
        alert("janvier");
        break;
        case "2":
            alert("février");
            break;
            case "3":
                alert("mars");
                break;
                case "4":
                    alert("avril");
                    break;
                    case "5":
                        alert("mai");
                        break;
                        case "6":
                            alert("juin");
                            break;
                            case "7":
                                alert("juillet");
                                break;
                                case "8":
                                    alert("août");
                                    break;
                                    case "9":
                                        alert("septembre")
                                        break;
                                        case "10":
                                            alert("octobre");
                                            break;
                                            case "11":
                                                alert("novembre")
                                                break;
                                                case "12":
                                                    alert("décembre")
                                                    break;
                                                    default:
                                                        alert("valeur non valide");
                                                            break; 
                                                            }