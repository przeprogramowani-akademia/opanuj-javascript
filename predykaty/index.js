/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 4 - "Predykaty"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która jako parametr przyjmie tablicę elementów oraz predykat.
*
* Predykatem będzie funkcja która jako parametr przyjmuje jeden element z podanej tablicy
* i zwraca dla niego wartość true lub false.
*
* Funkcja powinna zwrócić nową tablicę w której znajdą się tylko elementy spełniające
* podany warunek, nie używając wbudowanych metod filter lub map.
*
* Przykład:
* applyPredicate([1, 2, 3], element => element > 2) // => [3]
* applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)) // => ['b', 'c']
*/

function applyPredicate(elements, predicate) {
    const result = [];

    for (let i = 0; i < elements.length; i++) {
        if (predicate(elements[i])) {
            result.push(elements[i]);
        }
    }

    return result;
}

/* Weryfikacja */

function verify(input, goal) {
    const inputAsString = JSON.stringify(input);
    const goalAsString = JSON.stringify(goal);

    if (inputAsString === goalAsString) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
    }
}

verify(applyPredicate([1, 2, 3], element => element > 2), [3]);
verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']);
verify(applyPredicate(['x', 'y'], element => element === 'z'), []);
