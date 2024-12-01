import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { Toaster } from '@/components/ui/toaster';
import { Auth } from '@/pages/Auth/Auth';
import { Notfound } from '@/pages/Notfound/Notfound';

import { SigninContainer } from './components/organisms/Auth/SigninContainer';
function App() {

const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
        <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
        <Route path="/home" element={<Auth><h1>Home</h1></Auth>} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
