const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";
for (let i = 1; i <= 100; i++) {
    // Ad ogni iterazione creo una cella con il numero
    let result;
    if(i % 2 === 0) {
        result = "odd";
    } else {
        result = "even";
    }
    // console.log(i, result);
    gridString += `<div class="square ${result}">${i}</div>`
    console.log(`iterazione ${i}`, gridString);
}

// Scrittura del valore finale in HTML
// Quest osuccede dopo la fine del ciclo for, quindi dopo aver eseguito tutti i 100 iterazioni
rowElem.innerHTML = gridString;

