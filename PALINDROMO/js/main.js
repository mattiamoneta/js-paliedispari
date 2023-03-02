const domMsgBox = document.querySelector('.msgbox');
const result = palindromo();

if (result == true){
    console.log("E' un palindromo!");
    domMsgBox.innerHTML = "E' un palindromo!";
} else {
    console.log("NON è un palindromo!");
    domMsgBox.innerHTML = "NON è un palindromo!";
}



function palindromo(){

    // Ottengo input utente
    do{
        userInput = prompt("Inserisci una parola: ");
    } while (userInput == "");


    let reversedInput = "";

    // Inversione dell'input utente
    for(let i = userInput.length - 1; i >= 0; i--){
        reversedInput += userInput[i];
    }

    // Verifico uguaglianza
    if (userInput == reversedInput){
        return true;
    } else {
        return false;
    }
}