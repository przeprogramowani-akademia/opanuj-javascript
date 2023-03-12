/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "W dwóch krokach"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
* parametru zarejestrowany wcześniej przedrostek.
*
*
* Przykład:
* const greeting = withPrefix('Witaj, ');
* greeting('Janek'); // => 'Witaj, Janek'
* greeting('Tomek'); // => 'Witaj, Tomek'
*
* const goodbye = withPrefix('Żegnaj, ');
* goodbye('Janek'); // => 'Żegnaj, Janek'
* goodbye('Tomek'); // => 'Żegnaj, Tomek'
*
* Utworzona funkcja to tzw. funkcja wyższego rzędu.
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function withPrefix(prefix) {
    if (typeof prefix !== 'string') {
        throw new Error('Prefix musi być stringiem');
    }

    return function(name) {
        if (typeof name !== 'string') {
            throw new Error('Name musi być stringiem');
        }

        return prefix + name;
    }
}

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

const course = withPrefix('I ty Opanujesz JavaScript, ')

try {
    verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
    verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
} catch {
    console.log('Niestety :(')
}
