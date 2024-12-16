import { useContext } from 'react';

import CreateChannelContext from '@/context/CreateChannelContext';

export const useCreateChannelModal = () => {
    return useContext(CreateChannelContext);
};