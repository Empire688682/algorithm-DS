import React from 'react'

const App = () => {
  const students = ["juwon", "daniel", "simba", "rossie", "dan"];

 const findStudents = (allStudent, student) =>{
  let studentFound = false
  for (let i = 0; i < allStudent.length; i++){
    if(allStudent[i] === student){
      console.log(`${student} found`);
      studentFound = true 
      break
    }
    if(!studentFound){
      console.log(`${student} not found`);
    }
  }
 }

 findStudents(students, "juwon")

  return (
    <div>
      <h1>{students[1].aminat}</h1>
    </div>
  )
}

export default App
