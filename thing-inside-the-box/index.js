/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/

function thing(box) {
  const lines = box.trim().split('\n');
  for (let i = 1; i < lines.length - 1; i++) {
    for (let j = 1; j < lines[i].length - 1; j++) {
      if (lines[i][j] === 'o') {
        return true;
      }
    }
  }
  return false;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(thing(`*****
              *   * o
              *   *
              *****`), false);

verify(thing(`*****
              * o *
              *   *
              *****`), true);

 verify(thing(`*****
               *   *
               *   *
               *****`), false);