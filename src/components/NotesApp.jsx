import React, { useState, useEffect } from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

function NotesApp() {
    const url = 'http://localhost:7070/notes';
    const [notes, setNotes] = useState([]);

    const update = async () => {
        const data = await fetch(url).then(response => response.json());
        setNotes(data);
    };

    useEffect(() => {
        update();
    }, []);

    const handleAdd = (note) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => update());
    };

    const handleDelete = (id) => {
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        }).then(() => update());
    };

    return (
        <div className='p-7'>
            <div className='mb-7 flex'>
                <div className='mr-5 text-black text-2xl'>Notes</div>
                <button className='btn text-3xl text-green-600' onClick={update}>↺</button>
            </div>
            <NotesList items={notes} onDelete={handleDelete} />
            <NotesForm onAdd={handleAdd} />
        </div>
    );
};

export default NotesApp;
