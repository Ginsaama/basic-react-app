import React, { useState } from 'react'

export const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }

    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('');
        } else {
            alert("Please enter a note");
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            // Check if Enter key is pressed without Shift
            handleSaveClick();
            event.preventDefault(); // Prevents adding a new line in the textarea
        }
    };
    return (
        <div className="note new">
            <textarea rows="8"
                cols="10"
                placeholder='Type to add a note'
                value={noteText}
                onChange={handleChange}
                onKeyDown={handleKeyPress}></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save'
                    onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote