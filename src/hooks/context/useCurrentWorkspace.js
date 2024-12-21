import { useContext } from 'react';

import WorkspaceContext from '@/context/WorkspaceContext';

export const useCurrentWorkspace = () => {
    return useContext(WorkspaceContext);
};