import React from 'react'
  
const Li = () => {
const nav = ["Home", "Contact", "Gallery", "Edit"];

return (
    <ul>
    {nav.map((element) => (
        <li key={element}>{element}</li>
    ))}
    </ul>
);
}

export default Li

//! Diferentes formas de crear el List
//? Posiciones dentro de un array
// const nav = ["Home", "Contact", "Gallery", "Edit"];
// const Li = () => {
//     return (
//       <ul>
//         <li>{nav[0]}</li>
//         <li>{nav[1]}</li>
//         <li>{nav[2]}</li>
//         <li>{nav[3]}</li>
//       </ul>
//     )
//   }

//? Según el name que le pasemos a Li  =>  <Li name="Home" />
// const Li = (prop) => {
//   return (
//     <li>{prop.name}</li>
//   )
// }


//* Estas formas no funcionaron, solo testeando cómo funciona REACT
//* intentaba hacer un búcle. Documentándome vi que se hace con el .map
//* preguntar si se puede utilizando bucles FOR
// const toPrint = [];
// const list = (array) => {    
//     for (const word of array){
//         toPrint.push(<li>{word}</li>)
//     }
//     return toPrint
// }

// const navTitle = (array) => {
//     for (const word of array){
//         return (
//             <Li name={word} />
//         )
//     }
// }

