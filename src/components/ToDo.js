import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deleteToDo } from '../store';
import { remove } from '../store';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>{' '}
      {/* <button onClick={() => dispatch(deleteToDo(id))}>DEL</button> */}
      <button onClick={() => dispatch(remove(id))}>DEL</button>
    </li>
  );
};

export default ToDo;
