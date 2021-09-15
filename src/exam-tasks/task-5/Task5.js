import React, { useRef } from 'react';

function Task5() {
  // Hooks
  // ref
  const divRef = useRef(0);

  // Custom Functions
  const lightThemeHandler = () => {
    divRef.current.style.backgroundColor = '#f1f1f1';
    divRef.current.style.color = '#000000';
  };

  const darkThemeHandler = () => {
    divRef.current.style.backgroundColor = '#000000';
    divRef.current.style.color = '#f1f1f1';
  };

  return (
    <div ref={divRef}>
      <h3>Task 5</h3>
      <h1>Hello World</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        natus!
      </p>
      <button onClick={lightThemeHandler}>Light theme</button>
      <button onClick={darkThemeHandler}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
