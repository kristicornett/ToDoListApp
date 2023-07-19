import React from 'react'

export const ToDo = ({ doThings, toggleDoThing }) => {

    const handleDoThingClick = () => {
        toggleDoThing(doThings.id)
    }
    return (
        <div>
        <label>
            <input type='checkbox' checked={doThings.complete} onClick={handleDoThingClick}/>
            </label>
            {doThings.name}
        </div>
    )
}