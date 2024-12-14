import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';
import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                    <ResizablePanel
                        defaultSize={20}
                        minSize={11}
                        className='bg-slack-medium'
                    >
                        <div>
                            Sidebar
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel
                        minSize={20}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
                
            </div>
        </div>
    );
};