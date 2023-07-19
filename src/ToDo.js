import React from 'react'

export const ToDo = ({ doThings, toggleDoThing }) => {

    const handleDoThingClick = () => {
        toggleDoThing(doThings.id)
    }
    return (
        <div>
            <ul className='list'>
            <li className='list-item'>
        <label className='label'>
            <input className='checkbox' type='checkbox' checked={doThings.complete} onClick={handleDoThingClick}/>
            </label>
            
            {doThings.name}
            </li>
            </ul>
        </div>
    )
}