import React, { useState } from 'react';

function NotesForm({ onAdd }) {
    const [form, setForm] = useState({ content: ''});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm({
            ...setForm,
            [name]: value,
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(form);
        setForm({ content: '' });
    }

    return(
        <form className='w-80 h-28 justify-start items-end mb-6' onSubmit={handleSubmit}>
            <div className='relative flex flex-col'>
                <label htmlFor="content">New Note</label>
                <textarea className='w-full h-32 p-2 border border-gray-300 rounded' id="content" name="content" value={form.content} onChange={handleChange} />
                <button className='absolute right-6 bottom-3 text-xl text-black' type="submit">➤</button>
            </div>
        </form>
    );

}

export default NotesForm;