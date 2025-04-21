import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API URL - change to your deployed backend URL when ready
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    // Fetch notes from backend
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch(`${API_URL}/api/notes`);
                if (!response.ok) {
                    throw new Error('Failed to fetch notes');
                }
                const data = await response.json();
                setNotes(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNotes();
    }, [API_URL]);

    // Add a new note
    const handleAddNote = async (e) => {
        e.preventDefault();
        if (!newNote.trim()) return;

        try {
            const response = await fetch(`${API_URL}/api/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newNote }),
            });

            if (!response.ok) {
                throw new Error('Failed to add note');
            }

            const addedNote = await response.json();
            setNotes([...notes, addedNote]);
            setNewNote('');
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="loading">Loading notes...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="App">
            <header>
                <h1>JotDown</h1>
                <p>Take notes instantly and access them anytime</p>
            </header>

            <section className="add-note">
                <form onSubmit={handleAddNote}>
                    <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Enter a new note..."
                    />
                    <button type="submit">Add Note</button>
                </form>
            </section>

            <section className="notes-container">
                <h2>Your Notes</h2>
                {notes.length === 0 ? (
                    <p>No notes yet. Add your first note above!</p>
                ) : (
                    <ul className="notes-list">
                        {notes.map((note) => (
                            <li key={note.id} className="note-item">
                                <p>{note.text}</p>
                                <small>Created: {new Date(note.createdAt).toLocaleString()}</small>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default App;