import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import { Header } from './Header';
import { TodoWrapper } from './components/TodoWrapper';

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "12/04/02",
    },
    {
      id: nanoid(),
      text: "this is my second note!",
      date: "12/24/02",
    },
    {
      id: nanoid(),
      text: "this is my third note!",
      date: "12/34/02",
    },

  ]);
  // Array of notes which are already pre existing prior to user entry.

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <div className='to-do'>
          <TodoWrapper />
        </div>
        <div className='note-app'>
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote} />
        </div>
      </div>
    </div>
  )
}
export default App;
// This is where all the components will go to
