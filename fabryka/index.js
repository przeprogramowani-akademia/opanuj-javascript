/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 9 - "Fabryka"
*/

/*
* Cel zadania
*------------
* Zmodyfikuj funkcję factory w taki sposób, aby zmienna quote była dostępna jako właściwość.
*/

function factory() {
    return { quote: 'Cool!' };
}

verify(factory().quote, 'Cool!');

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
