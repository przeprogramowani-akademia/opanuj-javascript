/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

function zipIt(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Parametry muszą być typu number');
    }

    const firstArr = String(first).split('');
    const secondArr = String(second).split('');
    let result = '';

    for (let i = 0; i < Math.max(firstArr.length, secondArr.length); i++) {
        if (firstArr[i]) {
            result += firstArr[i];
        }
        if (secondArr[i]) {
            result += secondArr[i];
        }
    }

    return result;
}

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
verify(zipIt(5555, 12), '515255');
