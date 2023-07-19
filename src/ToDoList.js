import React, { useState } from 'react'
import { ToDo } from './ToDo'


export const ToDoList = ({doThings, toggleDoThing}) => {
    return (
    
            doThings.map(doThing => {
                return <ToDo key={doThing.id} doThings={doThing} toggleDoThing={toggleDoThing}/>
            })
      
    )
}