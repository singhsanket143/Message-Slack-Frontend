import { createContext, useState } from 'react';

const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
    const [currentWorkspace, setCurrentWorkspace] = useState(null);

    return (
        <WorkspaceContext.Provider value={{ currentWorkspace, setCurrentWorkspace }}>
            {children}
        </WorkspaceContext.Provider>
    );
};

export default WorkspaceContext;