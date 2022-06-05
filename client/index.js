// incorporando estilos a mi bundle
import './styles/style.css'
import './styles/mystyle.css'

console.log("🚀 front-end working!");

// default parameters ES6/2015
let show = (m = "😎") => {
    console.log(m);
};
show();

// Promises ES06
function resolveAfer2Seconds() {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("function resolve")
        }, 1000);
        }); 
}

async function asyncCall(){
    console.log("Calling async function!!!");
    const result = await resolveAfer2Seconds();
    console.log(result); // imprime "function resolve" en la consola
} 

asyncCall();