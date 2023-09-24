import React from 'react'

export const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Add Note to Your Task</h1>
            <button
                className='save'
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }>
                Dark Mode
            </button>
        </div>
    )
}
