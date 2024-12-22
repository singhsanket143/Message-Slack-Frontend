import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';

export const Channel = () => {

    const { channelId } = useParams();

    const { channelDetails, isFetching, isError } = useGetChannelById(channelId);

    if(isFetching) {
        return (
            <div
                className='h-full flex-1 flex items-center justify-center'
            >
                <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
            </div>
        );
    }

    if(isError) {
        return (
            <div className='h-full flex-1 flex flex-col gap-y-2 items-center justify-center'>
                <TriangleAlertIcon className='size-6 text-muted-foreground' />
                <span className='text-sm text-muted-foreground'>Channel Not found</span>
            </div>
        );
    }

    return (
        <div className='flex flex-col h-full'>
            <ChannelHeader name={channelDetails?.name} />
            <div className='flex-1' />
            <ChatInput />
        </div>
    );
};