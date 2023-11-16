export function exo5() {

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


console.log(`Tous les livres ont-ils été empruntés au moins une fois ? ${books.every(book => book.rented > 0) ? "Oui" : "Non"}`);
console.log("");
console.log(`Le livre le plus emprunté est : ${books.sort((a, b) => b.rented - a.rented)[0].title}`);
console.log("");
console.log(`Le livre le moins emprunté est : ${books.sort((a, b) => a.rented - b.rented)[0].title}`);
console.log("");
console.log(`Le livre avec l'ID 873495 est : ${books.find(book => book.id === 873495).title}`);
console.log("");
const index = books.findIndex(book => book.id === 133712);
books.splice(index, 1);
console.log(`Les livres triés par ordre alphabétique sont : ${books.sort((a, b) => a.title.localeCompare(b.title)).map(book => book.title).join(", ")}`);

}