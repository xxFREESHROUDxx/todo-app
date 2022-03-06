import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<><input className='todo-input edit' type='text' placeholder='Update your item' name='text' value={input} onChange={handleChange} ref={inputRef} >

            </input>
                <button className='todo-button edit' >Update</button></>) : (<><input className='todo-input' type='text' placeholder='Add a Todo' name='text' value={input} onChange={handleChange} ref={inputRef} >

                </input>
                    <button className='todo-button' >Add Todo</button></>)}

        </form>
    );
}

export default TodoForm