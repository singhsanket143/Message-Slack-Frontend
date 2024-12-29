import { useContext } from 'react';

import ChannelMessages from '@/context/CHannelMessages';

export const useChannelMessages = () => {
    return useContext(ChannelMessages);
};