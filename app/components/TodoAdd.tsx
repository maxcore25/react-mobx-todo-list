import { Button, Input, Grid } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '@/store';

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Input
        placeholder='New todo'
        value={todoStore.newTodo}
        onChange={e => (todoStore.newTodo = e.target.value)}
      />
      <Button onClick={() => todoStore.addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
