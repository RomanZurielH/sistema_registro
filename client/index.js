/* eslint-disable no-console */

// incorporando estilos a mi bundle

import './styles/mystyle.css';

console.log('🚀front-end working!');

// default parameters
const show = (m = '😎') => {
  console.log(m);
};
show();

// Promises
function resolveAfer2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('function resolve');
    }, 200);
  });
}

async function asyncCall() {
  console.log('Calling async function!!!');
  const result = await resolveAfer2Seconds();
  console.log(result); // imprime "function resolve" en la consola
}

asyncCall();
