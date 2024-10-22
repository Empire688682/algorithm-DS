import React, { useEffect, useState } from 'react'

const App = () => {
  const students = ["juwon", "daniel", "simba", "rossie", "dan"];
  const [studentFound, setStudentFound] = useState('');
  const [index, setIndex] = useState(0);

  const checkIsStudent = () =>{
    let sName = students[index];
    let upercaseName = sName.concat(" Found ", `${index+1}`).toUpperCase();
    console.log(upercaseName)
    setStudentFound(upercaseName)
    if(sName === students[index]){
      setIndex(index + 1)
      if(index === students.length-1){
        setIndex(0)
      }
    }
  }

  return (
    <div>
      {
        studentFound ? <h1>{studentFound}</h1> : <h1>No student found</h1>
      }
      <button onClick={ checkIsStudent}>Check student</button>
    </div>
  )
}

export default App
