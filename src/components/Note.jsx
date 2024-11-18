import * as React from 'react';

function Note({item, onDelete}) {
    const {content, id} = item;

    return(
        <div className='relative w-56 h-40 mt-0 mr-10 mb-6 ml-0 p-6 border rounded border-black'>
            <div className='w-full h-full text-ellipsis'>{content}</div>
            <button className='absolute -top-4 -right-4 text-3xl text-red-700' onClick={() => onDelete(id)}>✕</button>
        </div>
    );
}
export default Note;