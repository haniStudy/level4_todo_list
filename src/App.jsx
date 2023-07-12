import React from 'react';
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClinet = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClinet}>
      <Router />
    </QueryClientProvider>
  )
};

export default App;