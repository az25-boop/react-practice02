import { Text, Form, TodoListItem } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = value => {
    setTodos(prev => [
      ...prev,
      {
        text: value,
        id: nanoid(),
      },
    ]);
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>;
      <Form onSubmit={addTodo} />
      <TodoListItem todos={todos} />
    </>
  );
};
