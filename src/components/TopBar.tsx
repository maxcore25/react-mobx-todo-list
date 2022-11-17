import * as React from 'react';
import { Button, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import todoStore from '../store';

function TopBar() {
  const onLoad = () => {
    todoStore.load(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    );
  };

  return (
    <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
