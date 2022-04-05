import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css'
import { Person } from './types'

function App() {
  const [persondisplay, setPersondisplay] = useState('')
  const person : Person = {
    name: 'hussen',
    age: 25,
    grade: 'elementary',
  }
  const personMethod = (per: typeof person) => {
    setPersondisplay(person.name)
    console.log('where is the person', per)
  }
  return (
    <div className="App">
      <header className="App-header">
        {persondisplay}
        {console.log('name')}
        <h1>React -with typescript template </h1>
        <button type="button" onClick={() => personMethod(person)}>click me</button>
      </header>
    </div>
  )
}

export default App
