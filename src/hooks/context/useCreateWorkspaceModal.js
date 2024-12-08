import { useContext } from 'react';

import CreateWorkspaceContext from '@/context/CreateWorkspaceContext';

export const useCreateWorkspaceModal = () => {
    return useContext(CreateWorkspaceContext);
};