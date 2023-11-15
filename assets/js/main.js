// Stampo i numeri da 1 a 100
for (let i = 0; i <= 100; i++) {

    // Controllo se i numeri sono divisibili per 3 e 5, stampo FizzBuzz
    if (i % 15 == 0) {
        console.log(i + ' FizzBuzz');
    }
    // Controllo se i numeri sono divisibili per 5, stampo Buzz
    else if (i % 5 == 0) {
        console.log(i + ' Buzz');
    }
    // Controllo se i numeri sono divisibili per 3, stampo Fizz
    else if (i % 3 == 0) {
        console.log(i + ' Fizz');
    }
};