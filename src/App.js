import React, { useState, useRef, useEffect } from 'react';
import { ToDoList } from './ToDoList';

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
  return (
  <>
    <ToDoList doThings={doThings}/>
    <input ref={doThingRef} type='text' />
    <button onClick={handleDoThing}>Add To Do</button>
    <button>Clear</button>
    <div>0 items left</div>
    </>
  )
}

export default App;
