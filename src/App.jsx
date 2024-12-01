import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SigninCard } from '@/components/organisms/Auth/SigninCard';
import { SignupCard } from '@/components/organisms/Auth/SignupCard';
import { Auth } from '@/pages/Auth/Auth';
function App() {

  return (
    <Routes>
      <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
      <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />
    </Routes>
  );
}

export default App;
