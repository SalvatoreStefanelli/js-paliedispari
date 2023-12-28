// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// usiamo un prompt per far scegliere all'utente pari o dispari e poi sceglie un numero
const odd_or_even = prompt('Choose odd or even');
const numb = Number(prompt('Type a numb from 1 to 5'));

let sum = numb_pc();
console.log(sum);

if (is_even(sum) === odd_or_even) {
    console.log('user is winner');
} else {
    console.log('PC is winner');
}

function is_even(sum) {
    if (sum % 2 === 0) {
        return 'even';
    } 
    return 'odd';
}
console.log(is_even(sum));

// uso function per generare un numero random
function numb_pc() {
    let num = Math.floor(Math.random() * 5) + 1;
    console.log(num);
    
    return num + numb;    
}


 

