import { exo1 } from "./script_1.js";
import { exo2 } from "./script_2.js";
import { exo3 } from "./script_3.js";
import { exo4 } from "./script_4.js";
import { exo5 } from "./script_5.js";

const userInput = prompt("Choisis ton numéro d'exo");

     const excerciseNumber = parseInt(userInput); // to_i en ruby

     switch (excerciseNumber) {
        case 1:
             console.log("Exercice 1");
             exo1();
        break;
        
        case 2:
             console.log("Exercice 2");
             exo2();
        break;

        case 3:
             console.log("Exercice 3");
             exo3();
        break;

        case 4:
             console.log("Exercice 4");
             exo4();
        break;

        case 5:
             console.log("Exercice 5");
             exo5();
        break;

        default:
            console.log("L'exercice n'existe pas")
            or (false)
            break;
            
     }