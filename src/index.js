import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.scss';
// react-query
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
       <App />
    </QueryClientProvider>
);
