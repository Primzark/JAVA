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

/*
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
                                                            



  
letchiffre = parseInt(prompt("Veuillez entrer un chiffre entier :"));
 console.log((chiffre % 2 === 0) ? "PAIR" : "IMPAIR");
                                                            
                                                            
let confirmation = window.confirm("En cliquant sur OK, je confirme que je rentre sur ce site en 'mon âme et conscience'");

                                                        
if (confirmation) {
  console.log("L'utilisateur a cliqué OK");
} else {
  console.log("L'utilisateur n'a pas validé");


}

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}


let i = 100;
while (i >= 0) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i--;
}

let nb1 = 3;
let nb2 = 6;
let somme = nb1 + nb2;

while (somme <= 2023) {
  console.log(somme);
  nb2 += somme;
  somme = nb1 + nb2;
}


let i = 1;
while (i <= 10) {
  if (i === 10) {
    console.log("Message " + i + ", C'est le dernier message !");
  } else {
    console.log("Message " + i);
  }
  i++;
}

for (let i = 1; i <= 13; i++) {
    console.log("Vendredi 13");
  }



console.log("Start !!");
for (let i = 20; i >= 0; i--) {
  console.log(i);
}
console.log("Finish !!")



for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
} 

  let kebabCaseString = ""; 

  for (let i = 1; i <= 10; i++) {
      kebabCaseString += i; 
      if (i < 10) { 
          kebabCaseString += "-";
      }
  }
  
  console.log(kebabCaseString); 
   */