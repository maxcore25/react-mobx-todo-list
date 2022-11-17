import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { Todo, todoStore } from '@/store';
import { observer } from 'mobx-react-lite';

function TodoListItems() {
  return (
    <>
      {todoStore.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={e => (todo.text = e.target.value)}
          />
          <Button onClick={() => todoStore.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemsObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemsObserver />
    </>
  );
}

export default TodoList;
