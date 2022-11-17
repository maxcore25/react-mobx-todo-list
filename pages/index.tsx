import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import TodoAdd from 'app/components/TodoAdd';
import TodoList from 'app/components/TodoList';
import TopBar from 'app/components/TopBar';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth='8xl' margin='auto' p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}
