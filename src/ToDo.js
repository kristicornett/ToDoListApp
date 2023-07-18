import React from 'react'

export const ToDo = ({ doThings }) => {
    return (
        <div>
        <label>
            <input type='checkbox' checked={doThings.complete}/>
            </label>
            {doThings.name}
        </div>
    )
}