import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { addToDo } from '../store';

const Home = () => {
  const [text, setText] = useState('');

  const toDo = useSelector((state) => state);
  console.log(toDo);
  const dispatch = useDispatch();

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo(text));
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
