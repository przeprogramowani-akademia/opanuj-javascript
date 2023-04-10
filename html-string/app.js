/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 21 - "HTML String"
*/

/*
* Cel zadania
*------------
* To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.
*
* Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.
*
* Przykład: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
*/

function convertAstToHtmlString(astObject) {
  let htmlString = "";

  if (astObject.nodeType === "element") {
    htmlString += `<${astObject.tagName}`;

    if (astObject.attributes) {
      astObject.attributes.forEach(attribute => {
        htmlString += ` ${attribute.name}="${attribute.value}"`;
      });
    }

    htmlString += ">";

    if (astObject.children) {
      astObject.children.forEach(child => {
        htmlString += convertAstToHtmlString(child);
      });
    }

    htmlString += `</${astObject.tagName}>`;
  } else if (astObject.nodeType === "text") {
    htmlString += astObject.value;
  }

  return htmlString;
}


/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(convertAstToHtmlString(
  { 
    "nodeType": "element", "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]}), '<div class="test">Hello world!</div>');