import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Modals } from '@/components/organisms/Modals/Modals';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/AppContextProvider';
import { AppRoutes } from '@/Routes';

function App() {

const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
        {/* <WorkspacePreferencesModal /> */}
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
