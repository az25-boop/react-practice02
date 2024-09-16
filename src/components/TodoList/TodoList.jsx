import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(todo => (
        <TodoListItem key={todo.id} />
      ))}
    </Grid>
  );
};
