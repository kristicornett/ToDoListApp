import React, { useState, useRef, useEffect } from 'react';
import { ToDoList } from './ToDoList';
import './App.css'

const local_storage_key = 'doThingsApp.doThings'

function App() {
  const [doThings, setDoThings] = useState([])
  const doThingRef = useRef()
  
  useEffect(() => {
    const storedThings = localStorage.getItem(local_storage_key)
    if (storedThings) setDoThings(JSON.parse(storedThings))
  }, [])


  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(doThings))
  }, [doThings])
  
  const handleDoThing = () => {
    const name = doThingRef.current.value;
    if (name.trim() !== '') {
      setDoThings(prevDoThings => [
        ...prevDoThings,
        { id: Date.now(), name, complete: false }
      ]);
      doThingRef.current.value = '';
    }
  };


  const toggleDoThing = (id) => {
    const newDoThings = [...doThings]
    const doThing = newDoThings.find(doThing => doThing.id === id)
    doThing.complete = !doThing.complete
    setDoThings(newDoThings)
    
  }

  const handleClearThings = (id) => {
    const newDoThings = doThings.filter(doThing => !doThing.complete)
    setDoThings(newDoThings)
  }

  return (
  <>
    <h1 className='title'>To Do List</h1>
    <ToDoList doThings={doThings} toggleDoThing={toggleDoThing}/>
    <input ref={doThingRef} type='text' />
    <button className='btn' onClick={handleDoThing}>Add To Do</button>
    <button className='btn' onClick={() => handleClearThings(doThings.id)}>Clear</button>
    <div>{doThings.filter(doThing => !doThing.complete).length}items left</div>
    </>
  )
}

export default App;
