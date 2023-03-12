/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "Jedna by wszystkimi rządzić"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję rule() w taki sposób aby wszystkie przekazane do niej tablice zostały połączone w jedną
*
*
* Przykład:
* rule([1, 2], [5, 6]) // => [1, 2, 5 , 6];
*
*/

/*
* Punkty dodatkowe
*-----------------
* - Wykorzystaj operator rest
* - Zapisz rozwiązanie w jednej linii
*/

const rulez = (...arrays) => arrays.flat();

/* Weryfikacja */
function verify(input, goal) {
    if (JSON.stringify(input) === JSON.stringify(goal)) {
        console.log("Gratulacje!");
    } else {
        console.log(`Niestety, oczekiwano - ${JSON.stringify(goal)}, otrzymano - ${JSON.stringify(input)}`);
    }
}
verify(rulez([1, 5], [6, 1]), [1,5,6,1]);
verify(rulez([1], [2], [3], [4], [5], [6]), [1,2,3,4,5,6]);
