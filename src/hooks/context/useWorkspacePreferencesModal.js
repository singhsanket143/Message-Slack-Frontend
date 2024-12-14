import { useContext } from 'react';

import WorkspacePreferencesModalContext from '@/context/WorkspacePreferencesModalContext';


export const useWorkspacePreferencesModal = () => {
    return useContext(WorkspacePreferencesModalContext);
};