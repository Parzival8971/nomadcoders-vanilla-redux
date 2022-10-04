import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  console.log(params.id);
  const toDo = useSelector((state) => state);
  console.log(toDo);
  const toDoText = toDo.find((toDo) => toDo.id === parseInt(params.id));

  return (
    <div>
      <h1>{toDoText?.text}</h1>
      <h1>Created at : {toDoText?.id}</h1>
    </div>
  );
};

export default Detail;
