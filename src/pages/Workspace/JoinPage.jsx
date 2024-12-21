import { Link, useParams } from 'react-router-dom';
import VerificationInput from 'react-verification-input';

import { Button } from '@/components/ui/button';

export const JoinPage = () => {

    const { workspaceId } = useParams();

    async function handleAddMemberToWorkspace() {
        console.log('Adding member to workspace');
    }

    return (
        <div
            className="h-[100vh] flex flex-col gap-y-8 items-center justify-center p-8 bg-white rounded-lg shadow-sm"
        >
            <div
                className="flex flex-col gap-y-4 items-center justify-center"
            >
                <div
                    className='flex flex-col gap-y-2 items-center'
                >
                    <h1
                        className="font-bold text-3xl"
                    >
                        Join Workspace
                    </h1>

                    <p>
                        Enter the code you received to join the workspace
                    </p>
                </div>

                <VerificationInput 
                    onComplete={handleAddMemberToWorkspace}
                    length={6}
                    classNames={{
                        container: 'flex gap-x-2',
                        character: 'h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                        characterInactive: 'bg-muted',
                        characterFilled: 'bg-white text-black',
                        characterSelected: 'bg-white text-black',
                    }}
                    autoFocus
                />

            </div>

            <div
                className='flex gap-x-4'
            >
                <Button size="lg" variant="outline" >
                    <Link to={`/workspaces/${workspaceId}`}>
                        Back to the workspace
                    </Link>
                </Button>
            </div>

            
            
        </div>
    );
};