import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import TodoAdd from '@/components/TodoAdd';
import TodoList from '@/components/TodoList';
import TopBar from '@/components/TopBar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List Using Next.js, TypeScript, MobX</title>
        <meta
          name='description'
          content='Todo List Using Next.js, TypeScript, MobX'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider theme={theme}>
        <Box maxWidth='8xl' margin='auto' p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </ChakraProvider>
    </>
  );
}
