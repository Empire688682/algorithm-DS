import React, { useEffect, useState } from 'react'

const App = () => {
  const students = ["juwon", "daniel", "simba", "rossie", "dan"];
  const [studentFound, setStudentFound] = useState('');
  const [index, setIndex] = useState(0);

  const checkIsStudent = (name) => {
      let sName = students[index];
      if(Object.values(students[index]).toString().split(",").join("") == name){
        setStudentFound(`yes ${name}`)
        console.log(`yes ${name}`)
      }
      else{
        setStudentFound(sName)
      }
      if (sName === students[index]) {
        setIndex(index + 1)
        if (index === students.length - 1) {
          setIndex(0)
        }
    }
  }
  let name = "dan"

  return (
    <div>
      {
        studentFound ? <h1>{studentFound} Found</h1> : <h1>No student found</h1>
      }
      <button onClick={()=>checkIsStudent(name)}>Check for {name}</button>
    </div>
  )
}

export default App
