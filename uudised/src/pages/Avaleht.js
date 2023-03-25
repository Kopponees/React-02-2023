import React, { useEffect, useState } from 'react'

function Avaleht() {
  const [postitused, uuendaPostitused]= useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => uuendaPostitused(data))
  }, []);

  return (
    <div>
       <div className="avalehttekst"> Olete sattunud Eesti Seppade Ühenduse kodulehele!</div>
    <img className="sepapilt" src="https://i.pinimg.com/originals/59/93/e4/5993e4ce957bd6c6c2bf4a73de0d9d2d.jpg" alt="" />
       { postitused.map(element =>
         <div>
          <div><i>{element.userId}</i></div>
         <div><u>{element.id}</u></div>
         <div><b>{element.title}</b></div>
         <div>{element.body}</div>
         </div>
         ) }
        </div>
  )
}

export default Avaleht