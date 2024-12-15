import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const navigate = useNavigate();

    useEffect(() => {

        if(isFetching) return;

        console.log('Workspaces downloaded is', workspaces);

        if(workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, creating one');
            setOpenCreateWorkspaceModal(true);

        } else {
            navigate(`/workspaces/${workspaces[0]._id}`);
        }

    }, [isFetching, workspaces, navigate]);

    return (
        <>
            <h1>Home</h1> 
            <UserButton />
        </>
    );
};