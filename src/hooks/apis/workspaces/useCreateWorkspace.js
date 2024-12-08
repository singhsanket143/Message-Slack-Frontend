import { useMutation } from '@tanstack/react-query';

import { createWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useCreateWorkspace = () => {
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
        mutationFn: (data) => createWorkspaceRequest({ ...data, token: auth?.token }),
        onSuccess: (data) => {
            console.log('Successfully created workspace', data);
        },
        onError: (error) => {
            console.error('Failed to create workspace', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    };
};