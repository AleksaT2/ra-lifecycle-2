import React from 'react';
import Note from "./Note";

function NotesList({items, onDelete}) {
    return(
        <div className='flex flex-wrap justify-start items-start mb-10'>
            {items.map((item) => <Note key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    );
}

export default NotesList;