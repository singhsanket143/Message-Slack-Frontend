import { CopyIcon, RefreshCcwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetJoinCode } from '@/hooks/apis/workspaces/useResetJoinCode';
import { useToast } from '@/hooks/use-toast';

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId }) => {
    
    const { toast } = useToast();

    const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

    async function handleCopy() {
        const inviteLink = `${joinCode}`;
        await navigator.clipboard.writeText(inviteLink);
        toast({
            title: 'Link copied to clipboard',
            type: 'success'
        });
    }

    async function handleResetCode() {
        try {
            await resetJoinCodeMutation();
        toast({
            title: 'Join code reset successfully',
            type: 'success'
        });
        } catch(error) {
           console.log('Error in resetting join code', error); 
        }
    }

    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite people to {workspaceName}
                    </DialogTitle>
                    <DialogDescription>
                        Use the code shown below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className='flex flex-col items-center justify-center py-10 gap-y-4'
                >
                    <p className='font-bold text-4xl uppercase'>
                        {joinCode}
                    </p>
                    <Button size="sm" variant="ghost" onClick={handleCopy}>
                        Copy Code
                        <CopyIcon className='size-4 ml-2' />
                    </Button>

                    {/* Link to redirect the user in a new tab to the join page */}
                    <a
                        href={`/workspaces/join/${workspaceId}`}
                        target="_blank"
                        rel="noreferrer"
                        className='text-blue-500'
                    >
                        Redirect to join page
                    </a>
                </div>
                <div
                    className='flex items-center justify-center w-full'
                >
                    <Button variant="outline" onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCcwIcon className='size-4 ml-2' />
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    );
};