/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("Es. 1: ", pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("Es. 2: ", pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Es. 3: ", pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const elementLast = pets.push(pets.shift());
console.log("Es. 4: ", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

licensePlate = "VE186PI";
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate;
}
console.log("Es. 5: ", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newObj = { brand: "Mercedes", model: "ClasseA", color: "Gray", trims: ["active", "style"] };
cars.push(newObj);

console.log("Es. 6: ", cars);

for (i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  carObj.trims.pop();
}

console.log("Es. 6: ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  justTrims.push(carObj.trims[0]);
}
console.log("Es. 7: ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const letter = "b";
for (let i = 0; i < cars.length; i++) {
  const carOb = cars[i];
  if (carOb.color.charAt(0) === letter) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

while (i < numericArray.length) {
  console.log(numericArray[i]);
  if (numericArray[i] === 32) {
    break;
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const lettersPos = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      lettersPos.push(1);
      break;
    case "b":
      lettersPos.push(2);
      break;
    case "c":
      lettersPos.push(3);
      break;
    case "d":
      lettersPos.push(4);
      break;
    case "e":
      lettersPos.push(5);
      break;
    case "f":
      lettersPos.push(6);
      break;
    case "g":
      lettersPos.push(7);
      break;
    case "h":
      lettersPos.push(8);
      break;
    case "i":
      lettersPos.push(9);
      break;
    case "l":
      lettersPos.push(10);
      break;
    case "m":
      lettersPos.push(11);
      break;
    case "n":
      lettersPos.push(12);
      break;
    case "o":
      lettersPos.push(13);
      break;
    case "p":
      lettersPos.push(14);
      break;
    case "q":
      lettersPos.push(15);
      break;
    case "r":
      lettersPos.push(16);
      break;
    case "s":
      lettersPos.push(17);
      break;
    case "t":
      lettersPos.push(18);
      break;
    case "u":
      lettersPos.push(19);
      break;
    case "v":
      lettersPos.push(20);
      break;
    case "z":
      lettersPos.push(21);
      break;
  }
}
console.log(lettersPos);
