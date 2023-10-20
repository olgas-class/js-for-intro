// console.log(1);
// console.log(2);
// console.log(3);
// // ...
// console.log(1000);
// 
// for(let i = 1; i <= 1000; i++) {
//     // Qui il codice che sarà ripetuto per ogni iterazione,
//     // In questo caso 1000 volte
//     console.log(i);
// }


// let x = 5;
// x++; // risultato è lo stesso di x = x + 1
// x++;
// console.log(x);

// let x = 5;
// console.log(x++); // 5 perché prima legge il valore preedente e solo dopo lo incrementa
// console.log(x); // 6
// 
// let y = 5;
// console.log(++y); // Prima incrementa e dopo legge il valore aggiornato
// console.log(y);
// 
// 
// let x = 2;
// 
// // let y = 5 * x++; 
// // console.log(y); // 10
// // console.log(x); // 3
// 
// let y2 = 5 * ++x;
// console.log(y2); // 15
// console.log(x); // 3

// 
// for(let i = 1; i <= 100; i++) {
//     // Scope di blocco
//     // i è la variabile dello scope di blocco
//     console.log(i);
// }
// 
// console.log("esco dal ciclo for");


// Contatore al contrario
// i = 0
// for(let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// Somma di tutti i numeri da 3 a 78;
// let somma = 0;
// for (let i = 3; i <= 80; i++) {
//     console.log(i);
//     somma = somma + i;
// }
// 
// console.log(`Somma finale è ${somma}`);

const listElem = document.querySelector("ul");
let message = "";

for (let i = 1; i <= 100; i++) {
    console.log(i);
    // Questo codice viene eseguito 100 volte
    message += `<li>${i}</li>`;
}

console.log(message);

listElem.innerHTML = message;