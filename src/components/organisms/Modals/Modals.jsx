import { CreateChannelModal } from '@/components/molecules/CreateChannelModal/CreateChannelModal';
import { CreateWorkspaceModal } from '@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal';
import { WorkspacePreferencesModal } from '@/components/molecules/Workspace/WorkspacePreferencesModal';

export const Modals = () => {
    return (
        <>
            <CreateWorkspaceModal />
            <WorkspacePreferencesModal />
            <CreateChannelModal />
        </>
    );
};