import { useQuery } from '@tanstack/react-query';

import { getPaginatedMessages } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetChannelMessages = (channelId) => {

    const { auth } = useAuth();
    
    const { isFetched, isError, error, data, isSuccess  } = useQuery({
        queryFn: () => getPaginatedMessages({ channelId, limit: 10, offset: 0, token: auth?.token }),
        queryKey: ['getPaginatedMessages'],
    });

    return {
        isFetched,
        isError,
        error,
        messages: data,
        isSuccess
    };
};