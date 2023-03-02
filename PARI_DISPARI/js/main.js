const domMsgBox = document.getElementById('msgbox');
const domBtnReset = document.getElementById('btnReset');
let usrNumber;
let usrEvenOdd;

// Controllo input pari dispari
do{
    usrEvenOdd = prompt('pari o dispari?:');

    if ((usrEvenOdd != "pari") && (usrEvenOdd != "dispari")){
        alert("ERRORE: Inserisci pari o dispari!");
        usrEvenOdd = "";
    }

}while(usrEvenOdd == "")

// Controllo numero in input
do{
    usrNumber = parseInt(prompt('Inserisci un numero:'));

    if (usrNumber < 0 || usrNumber > 5 || isNaN(usrNumber)){
        alert("ERRORE: Inserisci un numero tra 1 e 5!");
        usrNumber = 0;
    }

}while(usrNumber == 0)

console.log(`Hai puntato ${usrEvenOdd} con il numero ${usrNumber}`);
domMsgBox.innerHTML += `<li>Hai puntato <span class="underline">${usrEvenOdd}</span> con il numero <span class="underline">${usrNumber}</span></li>`;


// Genera numero e somma
const computerNumber = numberGenerator();

console.log(`Il computer ha il numero ${computerNumber}`);
domMsgBox.innerHTML += `<li>Il computer ha il numero <span class="underline">${computerNumber}</span></li>`;

const finalSum = computerNumber + usrNumber;

console.log(`La somma è ${finalSum}`);
domMsgBox.innerHTML += `<li>La somma è <span class="underline">${finalSum}</span></li>`;



if (usrEvenOdd == "pari"){
    
    if (isEven(finalSum)){
        console.log("PARI: Hai Vinto!");
        domMsgBox.innerHTML += `<li>PARI: <span class="text-win">Hai Vinto! :)</span></li>`;
    } else {
        console.log("DISPARI: Hai Perso! :(");
        domMsgBox.innerHTML += `<li>DISPARI: <span class="text-lose">Hai Perso! :(</span></li>`;
    }

} else {

    if (isEven(finalSum)){
        console.log("PARI: Hai Perso!");
        domMsgBox.innerHTML += `<li>PARI: <span class="text-lose">Hai Perso! :(</span></li>`;
    } else {
        console.log("DISPARI: Hai Vinto!");
        domMsgBox.innerHTML += `<li>DISPARI: <span class="text-win">Hai Vinto! :)</span></li>`;
    }
}

domBtnReset.addEventListener('click',function(){
    location.reload();
});

// FUNZIONI

function numberGenerator(){
    return Math.floor(Math.random() * 5) + 1;
}

function isEven(sum){
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

