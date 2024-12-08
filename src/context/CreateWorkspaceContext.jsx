import { createContext, useState } from 'react';

const CreateWorkspaceContext = createContext();

export const CreateWorkspaceContextProvider = ({ children }) => {

    const [openCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useState(false);

    return (
        <CreateWorkspaceContext.Provider value={{openCreateWorkspaceModal, setOpenCreateWorkspaceModal}}>
            {children}
        </CreateWorkspaceContext.Provider>
    );
};

export default CreateWorkspaceContext;