import { createContext, useState } from 'react';

const CreateChannelContext = new createContext();

export const CreateChannelContextProvider = ({ children }) => {
    
    const [openCreateChannelModal, setOpenCreateChannelModal] = useState(false);
    
    return (
        <CreateChannelContext.Provider
            value={{ openCreateChannelModal, setOpenCreateChannelModal }}
        >
            {children}
        </CreateChannelContext.Provider>
    );
};

export default CreateChannelContext;