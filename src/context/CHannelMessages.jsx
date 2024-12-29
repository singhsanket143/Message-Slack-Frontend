import { createContext, useState } from 'react';

const ChannelMessages = createContext();

export const ChannelMessagesProvider = ({ children }) => {

    const [messageList, setMessageList] = useState([]);
   

    return (
        <ChannelMessages.Provider value={{ messageList, setMessageList }}>
            {children}
        </ChannelMessages.Provider>
    );
};

export default ChannelMessages;