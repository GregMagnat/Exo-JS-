export function exo2() {

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;
for (let count = 1; count <= number; count++) {
  result *= count;
}
console.log(`Le résultat est : ${result}`);

}