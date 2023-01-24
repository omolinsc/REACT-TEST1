import React, { useState } from 'react'
import P from './P'

const Footer = () => {
  let experience = "Trabajos en los que he estado";
  let studies = "Estudios que he cursado";
  let other = "Otros conocimientos a tener en cuenta";

  const [text, setText] = useState("exp");

  return (
    <footer>
        <P name="copyright"/>
        <div className='botones' style={{display:"flex", gap:"20px", justifyContent:"center"}}>
          <button onClick={() => setText("exp")}>Experiencia</button>
          <button onClick={() => setText("studies")}>Estudios</button>
          <button onClick={() => setText("other")}>Otros</button>
        </div>
        <div style={{textAlign:"center"}}>
        {text === "exp" ? (
          <p>{experience}</p>
        ) : text === "studies" ? (
          <p>{studies}</p>
        ) : text === "other" ? (
          <p>{other}</p>
        ) : ( <p></p> )
        }
        </div>
    </footer>
  )
}

export default Footer
