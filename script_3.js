export function exo3() {

let Number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let Result = "";
for (let count = 1; count <= Number; count++) {
  Result += " ".repeat(Number - count) + "#".repeat(count) + "\n";
};
console.log(Result);

}