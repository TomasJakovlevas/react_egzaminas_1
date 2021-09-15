import React from 'react';
import Button from './components/Button';

//Fontawesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// Styling
import './style/Task3.css';

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <div className='twitter_container'>
        <div className='logo'>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>
        <Button text='Sign up' className='btn btn_signup' />
        <Button text='Log in' className='btn btn_login' />
      </div>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
