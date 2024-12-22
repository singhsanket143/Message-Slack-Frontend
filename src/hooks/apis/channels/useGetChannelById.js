import { useQuery } from '@tanstack/react-query';

import { getChannelById } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetChannelById = (channelId) => {
    const { auth } = useAuth();
    const { isFetching, isError, data: channelDetails, error } = useQuery({
        queryFn: () => getChannelById({ channelId, token: auth?.token }),
        queryKey: [`get-channel-${channelId}`],
    });

    return {
        isFetching,
        isError,
        channelDetails,
        error,
    };

};