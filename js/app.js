
// MILESTONE 1
// STAMPO I NUMERI DA 1 A 100 CON FIZZ BUZZ SU CONSOLE
for(let i=1; i<=100; i++){
    let num = i;
    if(num % 15 == 0){
        num = 'FizzBuzz';
    }
    else if(num % 3 == 0){
        num = 'Fizz';
    }
    else if(num % 5 == 0){
        num = 'Buzz';
    }
    console.log(num);
}